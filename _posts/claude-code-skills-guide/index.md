---
title: How to Write Skills That Actually Slap (A Claude Code Guide)
date: 2026-03-26
tags: claude, ai, tools, productivity
excerpt: A no-fluff guide to writing Claude Code skills that work like magic — with bookmarks, patterns, and the BKMs that took me way too long to figure out.
---

# How to Write Skills That Actually Slap

So you've been using Claude Code for a while. You've got your workflows. You've typed the same 200-word prompt for the fifth time this week. And somewhere in the back of your head, a tiny voice says: *there has to be a better way.*

There is. It's called **Skills**.

This is everything I wish I knew before I wasted a week writing skills that kinda worked but also kinda didn't.

---

## What Even Is a Skill?

A skill is a Markdown file Claude Code can invoke on demand — like a slash command you write yourself. You type `/my-skill`, and Claude reads the skill file and executes whatever instructions you put in it.

Think of it as a saved prompt with superpowers.

The file lives in `.claude/skills/` and looks like this:

```markdown
---
name: my-skill
description: Does the thing I always forget how to do
---

When this skill is invoked, you will...
```

That's it. That's the whole skeleton.

---

## The BKMs (Best Known Methods)

These are the patterns that separate a skill that works from a skill that *works every single time*.

### 1. Lead with the trigger condition

The first thing Claude reads is what matters most. Don't warm up — tell it exactly when this skill applies and what mode it's in:

```markdown
When this skill is invoked, you are in **code review mode**.
Your job is to review the diff since the last commit and...
```

If you bury the context, Claude will guess. Claude guessing is not your friend.

---

### 2. Use numbered steps for sequential work

Claude follows numbered lists with surprising reliability. If your skill has an order of operations, write it as a numbered list:

```markdown
1. Run `git diff HEAD` to see what changed
2. Identify any files that touch the database layer
3. For each database file, check for...
4. Output a summary in this format: ...
```

Bullet points are for "do these in any order". Numbers mean "do these in this order". Claude knows the difference.

---

### 3. Spell out the output format

The biggest time-saver in any skill is a concrete output template. Instead of:

> summarise what you found

Write:

```markdown
Output your findings in this exact format:

**Status**: PASS | FAIL | WARNING
**Files changed**: N
**Issues found**:
- [filename:line] description of issue

**Recommendation**: one sentence on what to do next
```

Now you get consistent, parseable output every time. You can even build other skills that read this output.

---

### 4. Scope it tightly

A skill that does one thing well is worth ten that do five things okay. The best skills I have are almost embarrassingly narrow:

- `/fix-build` — just fixes TypeScript errors, nothing else
- `/commit` — just formats and creates a git commit
- `/review-pr` — just reviews the open PR against the spec

If a skill starts with "first do X, and also Y, and while you're at it Z" — split it into three skills.

---

### 5. Include failure modes

Tell Claude what to do when things go wrong:

```markdown
If no staged files are found, say:
"Nothing staged. Run `git add <files>` first."
and stop — do not proceed.
```

Without this, Claude will improvise. Sometimes that's fine. Usually it's not what you wanted at 2am debugging a deploy.

---

### 6. Reference other files by path

Skills can tell Claude to read specific files before acting. This is huge for context-heavy tasks:

```markdown
Before starting, read:
- `CLAUDE.md` for project conventions
- `docs/architecture.md` for system overview
- The current `package.json` for available scripts
```

The skill becomes a self-loading context bundle. You don't have to re-paste the same background every time.

---

### 7. Use the `description` field like a search query

The `description` frontmatter isn't just documentation — it's how Claude decides which skill to load when you ask for something without using the exact slash command. Write it as if someone was searching for it:

```markdown
description: Review code for quality issues, security vulnerabilities, and style. Use after writing or modifying any code.
```

versus:

```markdown
description: Code review
```

The first one will be found. The second one might not.

---

## The Bookmark Pattern

Here's a pattern I use constantly: the **bookmark**. At the start of a long multi-step skill, I make Claude save its place:

```markdown
Before taking any action, output:
"Starting: [skill name] on [date]"
"Current file: [first file you'll touch]"

After completing each major step, output:
"✓ Step N complete: [what you just did]"
```

This does two things:
1. You can see exactly where Claude is in a long task
2. If something fails mid-way, you know where to resume

It's the skill equivalent of a checkpoint in a video game.

---

## A Real Example: The Deploy Checker

Here's an actual skill I use before every deploy:

```markdown
---
name: pre-deploy
description: Check everything is ready before deploying — runs build, checks for console.logs, verifies env vars
---

You are running a pre-deploy checklist. Go through each step in order.
Stop and report immediately if any step fails — do not continue to the next step.

## Steps

1. Run `npm run build` and verify it exits 0
2. Search for `console.log` calls in `src/` (excluding test files)
3. Check that `.env.production` exists and has no placeholder values like `YOUR_KEY_HERE`
4. Run `npm test -- --passWithNoTests` and verify it passes

## Output format

After all steps pass, output:

**PRE-DEPLOY CHECK: PASSED**
- Build: OK
- Console logs: [count found or "none"]
- Env vars: OK
- Tests: [N passed]

Ready to deploy.

If any step fails, output:

**PRE-DEPLOY CHECK: FAILED**
Step [N] failed: [reason]
Fix this before deploying.
```

Clean, explicit, battle-tested. You could run this skill a hundred times and get the same shape of output each time.

---

## Where to Go From Here

The best way to learn what makes a good skill is to use a bad one. Write something rough, run it three times, notice where it goes sideways — then rewrite the rule that covers that case.

The skills that are in my daily rotation all started as terrible first drafts that I slowly fixed by watching Claude misinterpret them.

That's the whole process. Write, run, watch it fail, fix the ambiguity.

Your future self will thank you.

---

*Built this site using Claude Code and a bunch of skills I wrote while procrastinating on actual work. See the source at [github.com/joeloffbeat/joeloffbeat.github.io](https://github.com/joeloffbeat/joeloffbeat.github.io).*
