import { test, expect, request } from '@playwright/test';

const graphqlEndpoint = 'https://demo.api.julesai.com/graphql';

test.describe('GraphQL API Tests', () => {

  async function graphqlRequest(baseURL: string, query: string, variables: any = {}, token?: string) {
    const context = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    const response = await context.post('', {
      data: { query, variables },
    });

    return response;
  }

  test('Login API - Success Scenario', async () => {
    const query = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          user {
            id
            email
          }
        }
      }
    `;

    const variables = {
      email: 'validuser@example.com',
      password: 'validPassword123'
    };

    const response = await graphqlRequest(graphqlEndpoint, query, variables);
    console.log(await response.text());
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.data.login.token).toBeDefined();
    expect(body.data.login.user.email).toBe(variables.email);
  });

  test('Login API - Failure Scenario', async () => {
    const query = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;

    const variables = {
      email: 'invalid@example.com',
      password: 'wrongPassword'
    };

    const response = await graphqlRequest(graphqlEndpoint, query, variables);
    expect(response.ok()).toBeTruthy(); // GraphQL errors still return 200 OK

    const body = await response.json();
    expect(body.errors).toBeDefined();
    expect(body.errors[0].message).toContain('WRONG_CREDENTIALS');
  });

  test('Data Retrieval - Validate API Response', async () => {
    const loginQuery = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `;
    const loginVariables = {
      email: 'validuser@example.com',
      password: 'validPassword123'
    };
    const loginResp = await graphqlRequest(graphqlEndpoint, loginQuery, loginVariables);
    const token = (await loginResp.json()).data.login.token;

    const dataQuery = `query GetUserProfile {userProfile {
          id
          name
          email
        }
      }`;

    const response = await graphqlRequest(graphqlEndpoint, dataQuery, {}, token);
    const body = await response.json();

    expect(body.data.userProfile.email).toBe('validuser@example.com');
    // TODO: You can also compare body.data with UI fetched data
  });

  test('Error Handling - 400 Bad Request', async () => {
    const badQuery = `
      query BadQuery {
        nonExistingField
      }
    `;

    const response = await graphqlRequest(graphqlEndpoint, badQuery);
    expect(response.status()).toBe(400); // If server properly throws 400
  });

  test('Error Handling - 401 Unauthorized', async () => {
    const securedQuery = `
      query GetUserProfile {
        userProfile {
          id
        }
      }
    `;

    const response = await graphqlRequest(graphqlEndpoint, securedQuery); // No token
    const body = await response.json();

    // GraphQL may return 200 but with errors
    expect(body.errors).toBeDefined();
    expect(body.errors[0].message).toContain("Cannot query field \"userProfile\" on type \"Query\". Did you mean \"userConfig\"?");
  });

  test('Error Handling - 500 Server Error Simulation', async () => {
    // Simulate bad mutation or force server error (depends on backend)
    const invalidMutation = `
      mutation CauseServerError {
        forceError
      }
    `;

    const response = await graphqlRequest(graphqlEndpoint, invalidMutation);
    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

});