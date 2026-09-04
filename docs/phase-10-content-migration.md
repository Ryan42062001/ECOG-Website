# Phase 10 — Content Migration Inventory

Starting checkpoint: `495e096b143f94fe431565399c3dd9b792f39988`

This phase is a content-completeness migration, not a redesign. Production material is classified before it is copied so old information is not accidentally presented as a current promise.

## Migration rules

- **Migrated / represented:** trustworthy content is confirmed and represented in the rebuild.
- **Confirm before publishing:** legacy content exists, but currentness is not established.
- **Historical only:** useful context may be retained only with wording that makes its historical nature explicit.
- **Intentionally omitted:** content is stale, unverifiable, redundant, or inappropriate for the static site.
- User/leadership-provided current information overrides stale production-site information.
- No production DNS/CNAME changes in Phase 10.
- No payment credentials, card/bank collection, or unverified giving-provider link.
- No current event claims without a trustworthy current source.

## Production → rebuild inventory

| Area | Current evidence | Rebuild destination | Status / action |
| --- | --- | --- | --- |
| Church identity | Everett Church of God; “Loving God Loving People”; Pentecostal; Jesus-centered; family ministry; lively worship and proclamation of God’s Word | Home / About | **Represented.** Preserve the substance without copying excessive legacy prose. |
| Visitor invitation | “Come and experience the love of God” | Home / New Here | **Represented.** |
| Sunday service | User confirmed Sunday Worship is now **10:00 AM**; legacy 9:30 AM time is obsolete | Home / New Here / Events / Contact / About / footer | **Confirmed and represented.** |
| Wednesday service | User confirmed Wednesday Bible Study remains **7:00 PM** | Home / New Here / Events / Contact / footer | **Confirmed and represented.** |
| Address | User confirmed **11152 Lincoln Highway, Everett, PA 15537** | Home / New Here / Contact / footer | **Confirmed and represented.** |
| Phone | User confirmed **814-652-9287** | Contact | **Confirmed and represented.** |
| Email | User confirmed general church email **everettcog@comcast.net** | Footer / Contact | **Confirmed and represented.** |
| Our Pastors | User confirmed **Jenn Kisner** and **John Kisner**, both Co-Pastors | About / Contact | **Names/titles represented.** Biographies and approved photo remain optional/pending; do not invent them. Direct emails: Jenn `kisner.jenn@yahoo.com`; John `jdkcog@comcast.net`. |
| What We Believe | User supplied ECOG’s current seven-part statement covering Bible, God, Jesus Christ, Salvation, Holy Spirit, Church, and Jesus’ return | About | **Confirmed and represented.** User-provided wording is authoritative for this rebuild. |
| Ways to Connect | Current IA covers visitor, ministry, event, and contact pathways | New Here / Ministries / Events / Contact | **Represented by current IA.** No redundant legacy page needed. |
| Children | User confirmed ages **5–12** and Children’s Church **Sunday at 10:00 AM**; legacy 9:30 AM time is obsolete | Ministries / Children | **Confirmed and represented.** Legacy activity examples are historical only. |
| Amplify Students | User confirmed current meeting is **Wednesday at 7:00 PM only**; Sunday meeting is obsolete. Ages 12–college age retained from legacy/current migration | Ministries / Students | **Current schedule represented.** Historical activity examples are not future promises. |
| Guys Ministry | User confirmed ministry remains active through events held during the year rather than a fixed recurring schedule | Ministries / Men | **Confirmed and represented as event-based.** |
| Senior Adults | User confirmed this group **no longer exists** | Ministries | **Inactive.** Removed from active ministry listing. Legacy page must not advertise the ministry as current. |
| Women’s Discipleship | User confirmed ministry remains active through events held during the year, not a fixed monthly schedule | Ministries / Women | **Confirmed and represented as event-based.** Legacy last-Tuesday schedule is obsolete and must not be published as current. |
| Messages | User selected the official ECOG YouTube channel as the authoritative sermon/message source: `https://www.youtube.com/@everettchurchofgod417` | Messages / Home | **Source confirmed.** Automated ingestion/display architecture remains implementation work; do not fabricate individual sermon metadata. |
| Events | User believes Facebook is the church’s current event source | Events / Home | **Likely source, not fully confirmed.** Keep structured event data empty until the Facebook workflow/source is confirmed and a maintainable integration approach is selected. |
| Giving | User reports ECOG does not currently have a real online-giving system | Give | **No provider selected.** Evaluate Tithely vs. Planning Center before launch; do not publish historical Suran/Engage link or imply a provider is active. |
| Contact | Confirmed address, phone, email, service times, and pastoral emails | Contact | **Confirmed and represented.** No fake form. |
| Facebook/social | User confirmed official Facebook `https://www.facebook.com/EverettCOG/` and YouTube `https://www.youtube.com/@everettchurchofgod417` | Footer / Contact as appropriate | **Confirmed.** Shared footer links represented. |
| Production imagery | Legacy pages contain church/ministry images | Site-wide | **Needs asset-rights/currentness review.** Prefer original church-owned, current, approved photos. Do not blindly scrape or hotlink production assets. |

## Remaining launch confirmation / content queue

Before Phase 12 launch, resolve only the items that remain genuinely open:

1. Obtain approved short biographies and a current leadership photo for Jenn and John Kisner if the church wants them published.
2. Confirm whether the official Facebook page is the intended authoritative source/workflow for upcoming events and who will maintain event information.
3. Implement/approve the YouTube-based Messages strategy without exposing API secrets or fabricating sermon metadata.
4. Select and configure an online-giving provider if ECOG wants online giving; no provider is currently selected.
5. Obtain an approved, church-owned photo set for the homepage, ministries, leadership, and visitor pages.

## Confirmed current reference

- Sunday Worship: **10:00 AM**
- Wednesday Bible Study: **7:00 PM**
- Address: **11152 Lincoln Highway, Everett, PA 15537**
- Phone: **814-652-9287**
- General email: **everettcog@comcast.net**
- Co-Pastors: **Jenn Kisner** and **John Kisner**
- Jenn email: **kisner.jenn@yahoo.com**
- John email: **jdkcog@comcast.net**
- Facebook: **https://www.facebook.com/EverettCOG/**
- YouTube: **https://www.youtube.com/@everettchurchofgod417**
- Children: **ages 5–12; Sunday 10:00 AM**
- Amplify Students: **Wednesday 7:00 PM**
- Guys Ministry: **events throughout the year; no fixed recurring schedule**
- Women’s Discipleship: **events throughout the year; no fixed recurring schedule**
- Senior Adults: **inactive / no longer exists**

## Phase 10 acceptance criteria

- Every major legacy navigation/content area is accounted for in this inventory.
- Existing verified content is not regressed.
- Historical activities remain clearly historical and are not converted into upcoming events.
- Confirmed current details replace stale legacy details consistently.
- Inactive ministries are not advertised as current.
- Unconfirmed giving/event integrations and unapproved imagery remain unpublished.
- Remaining launch dependencies are explicit rather than represented by fake current data.
- Phase 10 changes remain content-focused; production DNS, CNAME, broad SEO launch configuration, and performance work remain in later phases.
