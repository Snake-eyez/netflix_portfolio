---
name: create-prd
description: Create a Product Requirements Document from conversation context.
---

# Goal
Generate a comprehensive Product Requirements Document (PRD) based on the current conversation context and requirements.

# When To Use
Use this skill when the user wants to formalize a feature request, idea, or discussion into a structured PRD.

# Instructions
1. Review the conversation history to extract requirements.
2. Read the template in `resources/create-prd.md`.
3. Synthesize the information into a PRD following the structure.
4. Save the PRD to the specified output file (default: PRD.md).

# Constraints
- Do not invent requirements; ask if unclear.
- Follow the structure defined in the resource.

# Resources
- [PRD Template](resources/create-prd.md)
