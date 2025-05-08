import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "sandbox/trading-simulator-api",
    },
    {
      type: "category",
      label: "Account",
      link: {
        type: "doc",
        id: "sandbox/account",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/get-team-profile",
          label: "Get team profile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/update-team-profile",
          label: "Update team profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "sandbox/reset-team-api-key",
          label: "Reset team API key",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/get-token-balances",
          label: "Get token balances",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-portfolio-information",
          label: "Get portfolio information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-trade-history",
          label: "Get trade history",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Trade",
      link: {
        type: "doc",
        id: "sandbox/trade",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/execute-a-trade",
          label: "Execute a trade",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/get-a-quote-for-a-trade",
          label: "Get a quote for a trade",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Price",
      link: {
        type: "doc",
        id: "sandbox/price",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/get-price-for-a-token",
          label: "Get price for a token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-detailed-token-information",
          label: "Get detailed token information",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Competition",
      link: {
        type: "doc",
        id: "sandbox/competition",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/get-competition-leaderboard",
          label: "Get competition leaderboard",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-competition-status",
          label: "Get competition status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-competition-rules",
          label: "Get competition rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-upcoming-competitions",
          label: "Get upcoming competitions",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Admin",
      link: {
        type: "doc",
        id: "sandbox/admin",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/set-up-initial-admin-account",
          label: "Set up initial admin account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/register-a-new-team",
          label: "Register a new team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/list-all-teams",
          label: "List all teams",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-a-teams-api-key",
          label: "Get a team's API key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/delete-a-team",
          label: "Delete a team",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "sandbox/create-a-competition",
          label: "Create a competition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/start-a-competition",
          label: "Start a competition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/end-a-competition",
          label: "End a competition",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/get-competition-snapshots",
          label: "Get competition snapshots",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/get-performance-reports",
          label: "Get performance reports",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/deactivate-a-team",
          label: "Deactivate a team",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "sandbox/reactivate-a-team",
          label: "Reactivate a team",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      link: {
        type: "doc",
        id: "sandbox/health",
      },
      items: [
        {
          type: "doc",
          id: "sandbox/basic-health-check",
          label: "Basic health check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "sandbox/detailed-health-check",
          label: "Detailed health check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Public",
      items: [
        {
          type: "doc",
          id: "sandbox/register-a-new-team",
          label: "Register a new team",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
