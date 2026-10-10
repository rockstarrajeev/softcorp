# Directives: Strict Prohibition of Browser Tools

- **NEVER OPEN OR CONTROL BROWSERS:** The agent must NEVER call `browser_subagent` or any browser interaction/opening tools.
- **MANUAL TESTING BY USER:** The user explicitly handles all browser and manual testing. The agent should only write, build, test via terminal CLI, and report code readiness or push to Git when requested.
