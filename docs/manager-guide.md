---
title: Manager Guide
description: How to assign waiters, approve payments, and read shift stats in TacoFloor.
role: manager          # waiter | manager | all
category: user-guide  # user-guide | bot-training | reference
order: 1              # controls sidebar ordering in Astro
lastUpdated: 2026-05-26
author: Alina D.
---

# Manager Guide
 
As a manager, you have full access to TacoFloor. You can do everything a waiter can do, plus assign waiters to tables, approve payments, and monitor the shift from the stats bar.
 
Your role is shown in the top-right corner of the screen. If it shows **Waiter**, tap the avatar to switch back to Manager view.
 
---
 
## Reading the floor at a glance
 
The stats bar at the top updates in real time and gives you the shift overview without opening anything:
 
| Stat | What it means |
|---|---|
| **Open tables** | Tables currently serving guests |
| **Awaiting payment** | Tables with a closed check — action needed |
| **Covers tonight** | Total guests across all active tables |
| **Revenue (shift)** | Cumulative total of approved payments |
 
The **Awaiting payment** number pulses amber when it's non-zero. That's your main signal that something needs attention.
 
Use the filter bar to focus the floor grid — **Awaiting payment** filter is the fastest way to see what needs to be resolved before end of shift.
 
---
 
## Opening a table
 
You open a table the same way a waiter does, with one extra step: you can assign a specific waiter before opening.
 
1. Find a **Closed** table on the floor grid and tap **Open table**
2. Set the guest count
3. Select a waiter from the **Assign waiter** dropdown
4. Tap **Open table** to confirm
The table card will turn green and show the assigned waiter's name.
 
> **Note:** If you open a table without changing the waiter field, it defaults to the waiter previously assigned to that table.
 
---
 
## Reassigning a waiter
 
Currently, waiter reassignment happens at the time a table is opened. If you need to reassign mid-service, close the check first (if there are items), then reopen the table with the correct waiter selected.
 
This will be streamlined in a future update.
 
---
 
## Monitoring orders
 
You can see the running total for any active table directly on its card. To see the full order breakdown, tap **Order** on any open table — you can view and edit items from there.
 
If a waiter made a mistake with an order, you can correct it by tapping **Order**, adjusting quantities, and saving. Changes take effect immediately.
 
---
 
## Approving payments
 
When a waiter closes a check, the table moves to **Awaiting payment** status. From here, two things can happen:
 
### Option A — Waiter registers the payment themselves
 
The waiter taps **Pay**, selects cash or card, and registers the amount. Once the full amount is covered, the table closes automatically.
 
### Option B — You approve directly
 
If the payment has already been handled and you just need to close the table out:
 
1. Find the table showing **Awaiting** status
2. Tap **Approve** on the table card
3. The table closes immediately and revenue is added to the shift total
> **When to use Approve vs Pay:** Use **Pay** when you're registering the actual payment method (cash, card, split). Use **Approve** to close out a table where payment is already settled and you just need to clear it from the floor — for example, if a corporate account is billed separately.
 
---
 
## Handling split bills
 
When guests want to pay separately:
 
1. Tap **Pay** on the awaiting table
2. Toggle **Split bill** on
3. Enter the amount the first guest is paying
4. Tap **Register payment** — the table stays open for the remaining balance
5. Repeat for each subsequent guest
6. Once the full amount is covered, the table closes automatically
The remaining balance updates as each partial payment is registered.
 
---
 
## End of shift
 
Before closing down:
 
1. Check the **Awaiting payment** filter — resolve any tables still showing this status
2. Verify the **Revenue (shift)** total in the stats bar matches your expected takings
3. All tables should be in **Closed** status before you finish
> **Note:** Revenue and session data currently reset on page refresh. Persist data by wiring TacoFloor to the Tacos API — see the developer docs for details.
 
---
 
## Troubleshooting
 
**A table is stuck on Awaiting payment and the waiter can't close it.**
You can always use **Approve** to force-close a table. Check with the waiter that the physical payment was actually collected first.
 
**The Approve button isn't visible on a table card.**
You may be in Waiter view. Check the role badge in the top-right corner — tap the avatar to switch back to Manager.
 
**Revenue isn't updating.**
Revenue only updates when a payment is registered via **Pay** (full amount) or when you tap **Approve**. Partial payments from split bills don't count toward revenue until the full balance is covered.
 
**A table shows 0 guests but is marked Open.**
This can happen if a table was opened with the guest count left at 0. Tap **Order** on the table, then close and reopen it with the correct guest count.
 
