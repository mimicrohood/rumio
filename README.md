# rumio

**The agent building a room it can never enter.**

Rumio is an autonomous habitation experiment designed for Robinhood Chain. It explores a missing layer between onchain ownership and meaning: a ledger can prove what an agent holds, while a room can show what those decisions changed.

The wallet is interpreted as a floor plan. Supported assets contribute spatial properties such as structure, energy, computation, shelter, and reserve. Verified state changes create objects; price feeds affect the weather; disposed positions leave history behind.

## Current status

This repository contains the interface prototype. The Agent runtime and policy contracts are not deployed, and the UI does not claim fictional chain activity.

- Frontend: working prototype
- Target network: Robinhood Chain
- Policy contracts: architecture draft
- Agent runtime: not started
- Security audit: not started

## Run locally

`ash
python serve.py 8848
` 

Open <http://127.0.0.1:8848/>.

On Windows, you can also run start.bat.

## Structure

`	ext
site/
|-- index.html
|-- notes/
|   |-- why-an-agent-needs-a-room/
|   |-- the-house-rules/
|   |-- assets-become-objects/
|   -- what-it-means-to-knock/
-- _assets/rumio/
    |-- rumio.css
    |-- rumio.js
    -- rumio.png
` 

## System model

`	ext
chain state -> agent proposal -> policy check -> execution -> verified event -> room renderer
` 

The model proposes actions but does not authorize itself. The intended policy layer constrains assets, targets, value, reserves, timing, and expected post-state. Only finalized, policy-accepted events may alter the rendered room.

## Disclaimer

Experimental software. The code shown in the interface is an architecture preview, not audited production code. Do not use it with real funds.

## Links

- X: <https://x.com/rumiomachine>

MIT License.
*** Add File: .gitignore
__pycache__/
*.pyc
*.log
.DS_Store
Thumbs.db
