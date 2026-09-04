# Phase 10 — Content Migration Inventory

Starting checkpoint: `495e096b143f94fe431565399c3dd9b792f39988`

This phase is a content-completeness migration, not a redesign. Production material is classified before it is copied so old information is not accidentally presented as a current promise.

## Migration rules

- **Migrated / represented:** trustworthy production content already exists in the rebuild or can be safely incorporated.
- **Confirm before publishing:** production content exists, but leadership should confirm that it is still current.
- **Historical only:** useful context may be retained only with wording that makes its historical nature explicit.
- **Intentionally omitted:** content is stale, unverifiable, redundant, or inappropriate for the static site.
- No production DNS/CNAME changes in Phase 10.
- No payment credentials, card/bank collection, or unverified giving-provider link.
- No current event/sermon claims without a trustworthy current source.

## Production → rebuild inventory

| Area | Production evidence | Rebuild destination | Status / action |
| --- | --- | --- | --- |
| Church identity | Everett Church of God; “Loving God Loving People”; Pentecostal; Jesus-centered; family ministry; lively worship and proclamation of God’s Word | Home / About | **Represented.** Preserve the substance without copying excessive legacy prose. |
| Visitor invitation | “Come and experience the love of God” | Home / New Here | **Represented.** |
| Sunday service | Sunday Morning Worship — 9:30 AM | Home / New Here / Events / Contact / Messages | **Represented.** Reconfirm with leadership before launch. |
| Wednesday service | Wednesday Night Bible Study — 7:00 PM | Home / New Here / Events / Contact | **Represented.** Reconfirm with leadership before launch. |
| Address | 11152 Lincoln Highway, Everett, PA 15537 | Home / New Here / Contact / footer | **Represented.** Reconfirm before launch. |
| Phone | 814-652-9287 | Contact / Give / footer | **Represented.** Reconfirm before launch. |
| Email | Legacy production source has exposed `everettcog@Comcast.net`; some current renderings mask the value | Footer / Contact | **Confirm before publishing.** Do not add during migration without leadership confirmation. |
| Our Pastors | Legacy navigation includes an Our Pastors page | About | **Confirm before publishing.** Current names, titles, biographies, and approved photos must come from leadership/current source. Do not infer roles. |
| What We Believe | Legacy navigation includes What We Believe; homepage confirms Pentecostal identity and faith in Jesus Christ | About | **Partially represented.** Detailed doctrinal wording should be confirmed from current church/denominational source before expansion. |
| Ways to Connect | Legacy navigation includes Ways to Connect | New Here / Ministries / Contact | **Represented by current IA.** Avoid restoring a redundant page unless content gaps are found. |
| Children | Ages 5–12; Sunday 9:30 AM; legacy page describes Children’s Church and many activities | Ministries / Children | **Core facts represented. Historical activities only.** Do not imply old events are upcoming. |
| Amplify Students | Ages 12–college age; Sunday 9:30 AM and Wednesday 7 PM; food/games/discussion and legacy activity examples | Ministries / Students | **Core facts represented. Historical activities only.** |
| Guys Ministry | Men and boys; fellowship, encouragement, mentoring, breakfast/Word/special activities; small-group examples | Ministries / Men | **Represented without a fixed schedule.** Legacy page does not establish a dependable current recurring time. |
| Senior Adults | “Senior Adults Living Triumphantly”; ages 55+; fellowship, seasonal meals, trips, service projects; Bob or Shirley Mock named on production | Ministries / Senior Adults | **Core facts represented. Contact names require confirmation.** Do not add Bob/Shirley as current contacts without leadership approval. |
| Women’s Discipleship | Women mentoring women; service/discipleship focus; legacy last-Tuesday schedule and activity list | Ministries / Women | **Core mission represented. Schedule requires confirmation.** Do not publish the legacy recurring schedule as current without approval. |
| Messages | Production promotes a latest sermon | Messages / Home | **Infrastructure ready; current catalog not verified.** Keep data empty until an authoritative message feed/catalog is approved. |
| Events | Production links an events calendar | Events / Home | **Infrastructure ready; current event feed not verified.** Keep event data empty rather than inventing/upcycling historical events. |
| Giving | Legacy navigation has Donations; a third-party Suran/Engage URL has appeared in external historical evidence | Give | **Provider confirmation required.** Do not connect a payment URL until leadership confirms the current general-purpose giving provider/link. |
| Contact | Address, phone, service times | Contact | **Represented.** No fake form. Email/social links wait for confirmation. |
| Facebook/social | Legacy copy refers visitors to Facebook in places, but a verified current official profile URL is not established in the rebuild | Footer / Contact | **Confirm before publishing.** |
| Production imagery | Legacy pages contain church/ministry images | Site-wide | **Needs asset-rights/currentness review.** Prefer original church-owned, current, approved photos. Do not blindly scrape or hotlink production assets. |

## Leadership confirmation queue

Before Phase 12 launch, obtain explicit confirmation for:

1. Sunday 9:30 AM and Wednesday 7:00 PM service schedule.
2. 11152 Lincoln Highway, Everett, PA 15537 and 814-652-9287.
3. Current public church email address and preferred casing.
4. Current pastors/leaders, exact titles, short biographies, and approved photos.
5. Approved detailed What We Believe / doctrinal wording or authoritative denominational source.
6. Current Women’s Discipleship meeting schedule, if a recurring schedule should be published.
7. Whether Bob and/or Shirley Mock are still the public Senior Adults contacts.
8. Current official Facebook/social URLs.
9. Current online-giving provider and exact general-purpose giving URL.
10. Authoritative sermon/message source or feed.
11. Authoritative event calendar/feed and who will maintain it.
12. Approved, church-owned photo set for the homepage, ministries, leadership, and visitor pages.

## Phase 10 acceptance criteria

- Every major legacy navigation/content area is accounted for in this inventory.
- Existing verified content is not regressed.
- Historical activities remain clearly historical and are not converted into upcoming events.
- Unconfirmed leadership, schedules, email/social, giving, sermon, and event data remain unpublished.
- Remaining launch dependencies are explicit rather than represented by fake placeholders.
- Phase 10 changes remain content-focused; redesign, production DNS, CNAME, SEO launch configuration, and broad performance work remain in their later phases.
