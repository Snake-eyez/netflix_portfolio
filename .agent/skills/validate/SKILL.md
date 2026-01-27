---
name: validate
description: Run comprehensive validation of the project.
---

# Goal
Verify the health and correctness of the project through linting, testing, and building.

# When To Use
Use this skill after making changes or before submitting a PR to ensure no regressions.

# Instructions
1. Run backend linting and tests.
2. Run frontend build.
3. Optionally validate local server endpoints.
4. Generate a summary report of validation results.

# Constraints
- All checks must pass.
- Fix any issues found immediately.

# Resources
- [Validate Guide](resources/validate.md)
