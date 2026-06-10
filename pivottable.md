The **`email_sequence_lead`** table is the **enrollment tracker** — it records which leads are in which email sequences and where they are in that sequence.

## What it does

It answers three questions:

1. **Is this lead in this sequence?**  
   One row = one enrollment (`email_sequence_id` + `lead_id`).

2. **Where are they in the sequence?**  
   `current_step_index` — which email step they’re on (0 = first email).

3. **What’s the enrollment status?**  
   - `enrolled_at` — when they joined  
   - `paused_at` — sequence paused (e.g. after purchase)  
   - `completed_at` — all emails sent, sequence finished  

## How it fits in the flow

```
Lead captured
  → welcome sequence found/created
  → INSERT into email_sequence_lead   ← enrollment recorded here
  → SendSequenceEmailJob sends step 0
  → after each send, next step scheduled
  → when no more steps → completed_at set
```

It does **not** store email content or send history. That lives in:
- **`email_sequences`** / **`email_sequence_steps`** — sequence definition  
- **`lead_events`** / **`lead_email_events`** — what was actually sent  

## Example row

| email_sequence_id | lead_id | current_step_index | enrolled_at | paused_at | completed_at |
|-------------------|---------|-------------------|-------------|-----------|----------------|
| 3 | 4 | 0 | 2026-06-10 21:51:00 | null | null |

Meaning: Lead `4` is enrolled in welcome sequence `3`, on the first email, active (not paused or completed).

## Why it exists

Without this table, the system couldn’t:
- Avoid enrolling the same lead twice in the same sequence (unique on `email_sequence_id` + `lead_id`)
- Pause welcome when they convert
- Know which step to send next
- Mark a sequence as complete for a lead

So it’s the **per-lead progress record** for automated email sequences.
