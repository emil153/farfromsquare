/*!
 * Far From Square · Project storytelling components
 * Version 1.0.0
 *
 * Two Web Components for the Wix Studio site, added as Custom Elements
 * with a Server URL (no Velo needed):
 *
 *   <ffs-projects>                 Home page projects section
 *   <ffs-case-study project="...">  One case-study page per project
 *
 * One file serves both tags. Host it on any HTTPS static host
 * (see DEPLOY.md), then in Wix: Add Elements > Embed & Social >
 * Custom Element > Choose Source > Server URL.
 *
 * CONTENT LIVES IN `FFS_DATA` BELOW. To add or edit a project, edit that
 * object only. Nothing else in this file needs to change.
 *
 * Content rules (from the Far From Square project brief):
 *   - Text wrapped in P("...") is a PLACEHOLDER. It renders with a visible
 *     "Placeholder" flag until replaced with real, verified content.
 *   - Never add metrics, quotes, dates or outcomes that are not verified.
 *     Empty `metrics` arrays collapse the Outcome chapter to words only.
 *   - Images are Wix Media ids (the part after /media/ in a Wix image URL,
 *     e.g. "80a5b0_995fe5...~mv2.jpg"). `null` renders a labelled asset slot.
 */
(() => {
  'use strict';

  /* ======================================================================
   * 1. CONTENT
   * ==================================================================== */

  /** Marks a string as placeholder copy. */
  const P = (text) => ({ ph: true, text });

  const FFS_DATA = {
    /** Order used by the home section and by "Next project". */
    order: ['area-52', 'casa-bala', 'saudi-f1-fan-zone', 'sofia-high-school'],

    home: {
      eyebrow: 'Projects',
      title: 'Where story shapes place.',
      intro: 'Each of these places started as an idea about how people should feel there. Read the idea first, then see the place it became.',
      cta: 'Read the story'
    },

    projects: {
      /* ------------------------------------------------------------------
       * AREA 52 + SALTO'S, VELIKO TARNOVO
       * Sources: FFS deck v9, the live project page, the Area 52 promotional
       * text, and the gradat.bg article "Area 52 and Salto's: Brand-Led Design".
       * Photos: upload each file in area52-photos.zip to Wix Media and paste
       * its id. Until then the `file` name shows in the asset slot.
       * ---------------------------------------------------------------- */
      'area-52': {
        slug: 'area-52',
        aliases: ['area52'],              // legacy Wix slug, still matched
        liveSlug: 'area52',               // the URL the site uses today. Delete this line after renaming the CMS slug to area-52
        name: 'Area 52',
        theme: { mode: 'light', accent: '#C4E83B' },
        facts: [
          ['Location', 'Veliko Tarnovo, Bulgaria'],
          ['Area', '450 sq.m'],
          ['Year', '2025'],
          ['Sector', 'Family active entertainment'],
          ['Bar & diner', 'Salto’s, 100 seats'],
          ['Architecture', 'SGI']
        ],
        proposition: 'A family ecosystem.',
        why: 'Wellbeing for the whole family.',
        heroImage: { id: '80a5b0_995fe5efab114ed4a1fab5aed5ba122c~mv2.jpg', alt: 'The Area 52 entrance in Veliko Tarnovo, with the Area 52 logo on the wall', ratio: 1886 / 1303 },
        homeImage: { id: '80a5b0_995fe5efab114ed4a1fab5aed5ba122c~mv2.jpg', alt: 'The Area 52 entrance in Veliko Tarnovo', ratio: 1886 / 1303 },

        question: {
          label: 'The question',
          lead: 'What would a family place look like if it answered the problems families actually have?',
          problems: ['Not enough movement.', 'Too much screen time.', 'Not enough time together.'],
          // Each problem lines up with one pillar of the brand DNA and the wellbeing it serves.
          joinsTo: [
            { dna: 'Movement', wellbeing: 'Physical wellbeing' },
            { dna: 'Fun', wellbeing: 'Mental wellbeing' },
            { dna: 'Relaxation', wellbeing: 'Social wellbeing' }
          ]
        },

        whyBlock: {
          statement: 'Wellbeing for the whole family.',
          body: 'Not just a trampoline park. A community hub that improves physical, mental and social wellbeing, built on three pillars of brand DNA: movement, fun and relaxation.',
          dnaLabel: '',
          dna: [] // shown inside the three cells above instead
        },

        irl: {
          label: 'The IRL',
          title: 'Somewhere parents want to be, as much as the children.',
          body: 'Parents often spend hours sitting uninspired in places that entertain children but are almost unbearable for adults. So this could not be a trampoline park with a separate café. It had to be one ecosystem, where the park and the café work together.',
          device: 'switcher',
          states: [
            { key: 'child', label: 'Child', text: 'Jumping and active play, in a way that is genuinely fun.' },
            { key: 'parent', label: 'Parent', text: 'Salto’s: a 100-seat bar and diner with a European feel, not a plastic chair by the ball pit.' },
            { key: 'family', label: 'Family', text: 'Parents and children playing together. Fun enough for the children, sophisticated enough for the adults.' },
            { key: 'community', label: 'Community', text: 'Birthdays, friends and gatherings. A community hub for the families of Veliko Tarnovo.' }
          ],
          images: {
            left: { id: 'c03b98_98b3025146d649d7926484f36948fbd5~mv2.jpg', file: 'a52-valojump', alt: 'A boy mid-jump on the ValoJump interactive trampoline game', ratio: 2500 / 1669, slot: 'a52-valojump', position: '70% 8%' },
            right: { id: 'c03b98_6c538fcbef324bf8839bba63e915ca9c~mv2.jpg', file: 'saltos-table', alt: 'A table set with pizza, salad and wine at Salto’s, the bar behind', ratio: 1717 / 2576, slot: 'saltos-table', position: '50% 70%' },
            family: { id: 'c03b98_8aba061fe1d1435d9d32d65c803e26f3~mv2.jpg', file: 'a52-valo-family', alt: 'A father and two boys playing an interactive movement game together in ValoArena', ratio: 2800 / 1869, slot: 'a52-valo-family' },
            community: { id: 'c03b98_a5711b8415c44579b0118723824ce27e~mv2.jpg', file: 'a52-birthday', alt: 'A group of children celebrating a birthday with a cake at Area 52', ratio: 2576 / 1717, slot: 'a52-birthday' }
          }
        },

        story: {
          label: 'The story',
          title: 'The brand DNA, built in.',
          body: 'Movement brings energy and rhythm to the whole space. Fun is the thread that connects it. At Salto’s the energy softens into conversation. Bold colour carries the movement, and careful balance keeps it calm enough for adults.',
          device: 'spectrum',
          ends: ['Bold', 'Calm'],
          marks: [
            { word: 'Movement', at: 8 },
            { word: 'Fun', at: 38 },
            { word: 'Relaxation', at: 86 }
          ]
        },

        structure: {
          label: 'From story to structure',
          title: 'Every decision answers the why.',
          device: 'ledger',
          heads: ['We believed', 'So we designed', 'So people'],
          rows: [
            { tag: 'The ecosystem', cells: ['Families need more time together, not more time apart.', 'One small lifestyle ecosystem, where the park and the café interact, instead of a park with a separate café.', 'Children and adults both want to spend more time there.'] },
            { tag: 'Movement · physical wellbeing', cells: ['Movement is the engine of health.', 'Bold colour choices, balanced to stay stylish for every age.', 'Get active through jumping and play that is genuinely fun.'] },
            { tag: 'Fun · mental wellbeing', cells: ['Play should feel joyful, not chaotic.', 'Colour coordinated across the space, equipment and furniture. Neither a sterile gym nor a cluttered play area.', 'Sensory enjoyment instead of visual overload.'] },
            { tag: 'Relaxation · social wellbeing', cells: ['Relaxation is where connection happens.', 'Salto’s, a contemporary 100-seat bar and diner with a European feel, with interactive darts and pool.', 'Adults and children enjoy their time equally.'] }
          ]
        },

        place: {
          label: 'The place',
          title: 'Area 52 and Salto’s, Veliko Tarnovo.',
          images: [
            { id: 'c03b98_20b0144dfabd436a89045ecb4d04cf4d~mv2.jpg', file: 'a52-slide', alt: 'A girl sliding down an orange and purple inflatable', ratio: 1717 / 2576, caption: 'Movement', size: 'half', slot: 'a52-slide' },
            { id: 'c03b98_b65a0b609202452eb5097b0211c2e9a4~mv2.jpg', file: 'a52-girl-logo', alt: 'A girl laughing on an inflatable printed with the Area 52 logo', ratio: 2784 / 4176, caption: 'Fun', size: 'half', slot: 'a52-girl-logo' },
            { id: 'c03b98_5ffecc80608f4e21a6142d9ffe3d02b3~mv2.jpg', file: 'a52-valo-arena', alt: 'Teenagers and an adult playing an interactive movement game in ValoArena', ratio: 2505 / 1782, caption: 'Movement and fun: ValoArena', size: 'wide', slot: 'a52-valo-arena' },
            { id: 'c03b98_ee861170c2d841ac9d16ea22d5729115~mv2.jpg', file: 'saltos-couple', alt: 'Two adults raising wine glasses at a table in Salto’s', ratio: 2576 / 1717, caption: 'Relaxation: where parents stay', size: 'wide', slot: 'saltos-couple' },
            { id: 'c03b98_d92e9e95a7e94f52ad8624a1f8a580a8~mv2.jpg', file: 'saltos-waitress', alt: 'A Salto’s server holding a pizza in front of the bar', ratio: 1717 / 2576, caption: 'Salto’s bar and diner', size: 'third', slot: 'saltos-waitress' },
            { id: 'c03b98_49c0c340e145400e8ae1147f2391fa3b~mv2.jpg', file: 'saltos-cocktails', alt: 'Two cocktails on the Salto’s bar', ratio: 1717 / 2576, caption: 'The bar', size: 'third', slot: 'saltos-cocktails' },
            { id: 'c03b98_1c298622243d464a920f7ec603eb894b~mv2.jpg', file: 'saltos-chef', alt: 'A Salto’s chef smiling with a pizza and a salad', ratio: 1717 / 2576, caption: 'The kitchen', size: 'third', slot: 'saltos-chef' },
            { id: 'c03b98_080fabf66aae4ba7981861876b6e2ed7~mv2.jpg', file: 'saltos-darts', alt: 'Three darts in an interactive dartboard', ratio: 2576 / 1717, caption: 'Interactive darts at Salto’s', size: 'wide', slot: 'saltos-darts' }
          ]
        },

        outcome: {
          label: 'What it became',
          statement: 'A community hub for the families of Veliko Tarnovo.',
          body: 'Move your body, enjoy the experience, share it with others. A place shaped by an authentic brand story can create value beyond aesthetics, for a whole community.',
          metrics: [] // Only verified numbers. Leave empty if none.
        }
      },

      /* ------------------------------------------------------------------
       * CASA BALA
       * Source: "Casa Bala Restaurant" brief (Bulgarian original + English
       * translation). Use of Krasimir Balakov's name and image approved.
       * ---------------------------------------------------------------- */
      'casa-bala': {
        slug: 'casa-bala',
        aliases: ['casabala'],
        liveSlug: 'casabala',             // the URL the site uses. Must match the CMS item's page link
        name: 'Casa Bala',
        theme: { mode: 'dark', accent: '#C9A06A' }, // brass, sampled from the pendant lights in the renders
        facts: [
          ['Type', 'Restaurant and museum'],
          ['Owner', 'Krasimir Balakov'],
          ['Cuisine', 'Mediterranean']
        ],
        proposition: 'Built brick by brick.',
        why: 'A life and career, built brick by brick.',
        heroImage: { id: 'c03b98_4e8f8d7981024e6a8c102c347fe8fe0a~mv2.jpg', file: 'cb-dining-room', alt: 'The Casa Bala dining room: arched brick walls, timber columns and a backlit wall of glass panels', ratio: 1896 / 1266, caption: 'The dining room', slot: 'cb-dining-room' },
        homeImage: { id: 'c03b98_08f89419cde74a99a9fb75904f1736d4~mv2.jpg', file: 'cb-private-room', alt: 'A private dining room with a table inlaid with football pitch lines', ratio: 1902 / 1266, slot: 'cb-private-room' },

        question: {
          label: 'The question',
          lead: 'How do you turn a legend’s career into a place people want to sit down in?',
          problems: [],
          joinsTo: []
        },

        whyBlock: {
          statement: 'A life and career, built brick by brick.',
          body: 'Not a decorated room, but a temple of history. The interior gives physical expression to years of hard work, perseverance and sporting achievement.',
          dnaLabel: 'What the place stands for',
          dna: ['Hard work', 'Perseverance', 'Achievement']
        },

        irl: {
          label: 'The IRL',
          title: 'A dining room and a museum, around one table.',
          body: 'The new venture of Bulgarian football legend Krasimir Balakov combines a sophisticated yet welcoming restaurant with a museum space: a retrospective of a career that became a benchmark for excellence.',
          device: 'switcher',
          states: [
            { key: 'child', label: 'The restaurant', text: 'Sophisticated yet welcoming. Mediterranean flavours, with a touch or two of home.' },
            { key: 'parent', label: 'The museum', text: 'A career retrospective, from Etar to the 1994 FIFA World Cup and on into coaching.' },
            { key: 'family', label: 'Around the table', text: 'Where family tradition continues, and new traditions begin.' },
            { key: 'community', label: 'The legend', text: 'An iconic figure whose achievements and dedication have inspired generations.' }
          ],
          images: {
            left: { id: 'c03b98_9cab8cff78ad413883050c430eb3e229~mv2.jpg', file: 'cb-kitchen-arches', alt: 'A long table in front of brick arches framing the open kitchen', ratio: 1892 / 1266, slot: 'cb-kitchen-arches' },
            right: { id: 'c03b98_590d6d5d68f14f47a1e2d2f1e178b182~mv2.jpg', file: 'cb-museum-wall', alt: 'The museum wall: signed plates in a lit grid around a golden trophy', ratio: 2692 / 1196, slot: 'cb-museum-wall', position: '32% 50%' },
            family: { id: 'c03b98_08f89419cde74a99a9fb75904f1736d4~mv2.jpg', file: 'cb-private-room', alt: 'A private dining room with a table inlaid with football pitch lines', ratio: 1902 / 1266, slot: 'cb-private-room' },
            community: { id: 'c03b98_4b714474258f471689eddfc53fc403ad~mv2.jpg', file: 'cb-poster', alt: 'A large black and white photograph of Krasimir Balakov on a brick wall above the tables', ratio: 890 / 1262, slot: 'cb-poster', position: '50% 35%' }
          }
        },

        story: {
          label: 'The story',
          title: 'A wine cellar of personal stories.',
          body: 'Much like a wine cellar tells the story of its aged wines, Casa Bala tells personal stories that mature with dignity over time. Luxury here is tranquillity, elegance and refinement in every detail.',
          device: 'materials',
          materials: [
            { name: 'Brick', swatch: '#8E4A35', text: 'The central narrative element. A symbol of foundations, resilience and an authentic personality.' },
            { name: 'Wood and textiles', swatch: '#7A5A3F', text: 'Timber finishes and warm textiles soften the raw brick: sophistication with genuine comfort.' },
            { name: 'Light', swatch: '#C9A06A', text: 'Subtle lighting draws the guest to the experience and leaves the design in soft shadow.' },
            { name: 'Concrete, metal and decorative glass', swatch: '#8C9393', text: 'Authentic materials that turn each corner into an intimate retreat.' }
          ]
        },

        structure: {
          label: 'From story to structure',
          title: 'Brick is not an effect. It is the foundation.',
          device: 'bricks',
          wallCaption: 'A career, built brick by brick.',
          // Listed from the foundation upwards
          courses: [
            { title: 'Etar', text: 'Where it began.' },
            { title: '1994 FIFA World Cup', text: 'A career that became a benchmark.' },
            { title: 'The coaching career', text: 'The story continues.' },
            { title: 'Casa Bala', text: 'Traditions do not end. They evolve.', top: true }
          ],
          heads: ['We believed', 'So we designed', 'So guests'],
          rows: [
            ['A life and career built brick by brick.', 'Exposed brick as the central narrative material.', 'Feel the strong foundations behind the name.'],
            ['Personal stories mature with dignity, like aged wine.', 'A restaurant with a museum space, conceived like a wine cellar.', 'Dine alongside the story of a career.'],
            ['Luxury is tranquillity, not display.', 'Subtle lighting that leaves the design in soft shadow.', 'Stay focused on the experience itself.'],
            ['Sophistication and comfort can coexist.', 'Timber finishes and warm textiles that soften the raw brick.', 'Find elegance with a touch or two of home.'],
            ['Traditions do not end. They evolve.', 'A family table with Mediterranean flavours.', 'Continue family traditions and begin new ones.']
          ]
        },

        place: {
          label: 'The place',
          title: 'Casa Bala.',
          images: [
            { id: 'c03b98_0c9427f4320e459ab857541e38937278~mv2.jpg', file: 'cb-wine-wall', alt: 'The bar with a backlit wall of wine bottles under arched pendant lights', ratio: 1892 / 1258, caption: 'Like a wine cellar', size: 'wide', slot: 'cb-wine-wall' },
            { id: 'c03b98_ddc3094422144c8cb0409d77efba13a4~mv2.jpg', file: 'cb-bar', alt: 'The bar seen past tables and arched pendant lights', ratio: 896 / 1266, caption: 'Subtle light', size: 'third', slot: 'cb-bar' },
            { id: 'c03b98_f06a58fbf00e482fa90fbd1863292af9~mv2.jpg', file: 'cb-glass-screen', alt: 'A screen of decorative glass panels in a black metal frame', ratio: 890 / 1262, caption: 'Decorative glass', size: 'third', slot: 'cb-glass-screen' },
            { id: 'c03b98_c017966324684b8db1dbb09aca6f720d~mv2.jpg', file: 'cb-private-room-glass', alt: 'A private dining table under two woven pendant lights, a glass wall behind', ratio: 892 / 1262, caption: 'The private room', size: 'third', slot: 'cb-private-room-glass' },
            { id: 'c03b98_7773386c106f4ff7b56b423ff9c273c2~mv2.jpg', file: 'cb-heritage-wall', alt: 'The dining room with a football photograph on the brick wall and a glass screen', ratio: 1896 / 1268, caption: 'Heritage on the walls', size: 'wide', slot: 'cb-heritage-wall' },
            { id: 'c03b98_b2ca13a9a66f4d4780f8a59fdead14ec~mv2.jpg', file: 'cb-terrace', alt: 'A glazed dining room with tables set for dinner and trees outside', ratio: 1902 / 1264, caption: 'The glazed room', size: 'half', slot: 'cb-terrace' },
            { id: 'c03b98_8cc550c9fd5746d09a63b3211bd568f7~mv2.jpg', file: 'cb-washroom', alt: 'The washroom with a backlit glass panel wall and brass pendant spheres', ratio: 892 / 1266, caption: 'Refinement in every detail', size: 'half', slot: 'cb-washroom' }
          ]
        },

        outcome: {
          label: 'Around the table',
          statement: 'A place where family tradition continues, and new traditions begin around the table.',
          metrics: []
        }
      },

      /* ------------------------------------------------------------------
       * SOFIA HIGH SCHOOL · source: FFS deck v9 + live project page
       * ---------------------------------------------------------------- */
      'sofia-high-school': {
        slug: 'sofia-high-school',
        aliases: ['sofiahighschool'],
        liveSlug: 'sofiahighschool',      // the URL the site uses today. Delete this line after renaming the CMS slug
        name: 'Sofia High School',
        hidden: true, // replaced by Casa Bala on the site. Set to false to bring it back
        theme: { mode: 'light', accent: '#C4E83B' },
        facts: [
          ['Location', 'Sofia, Bulgaria'],
          ['Area', '600 sq.m'],
          ['Sector', 'Education'],
          ['Year', '2028']
        ],
        proposition: 'The building as the third teacher.',
        why: 'Space as a teacher.',
        heroImage: { id: '80a5b0_e190ae5bfd8d474d883e6d33e616fce1~mv2.png', alt: 'Debate hub, Sofia High School (render)', ratio: 958 / 790, caption: 'Render' },
        homeImage: { id: '80a5b0_e190ae5bfd8d474d883e6d33e616fce1~mv2.png', alt: 'Debate hub, Sofia High School (render)', ratio: 958 / 790 },

        question: {
          label: 'The question',
          lead: 'You can’t teach 21st-century thinking in a 20th-century box.',
          problems: [],
          joinsTo: []
        },

        whyBlock: {
          statement: 'Space as a teacher.',
          body: 'Trying to deliver a 21st-century STREAM education in a building not designed for it leads to limits. So we focused on how the building itself could become a physical embodiment of critical thinking and adaptability.',
          dnaLabel: '',
          dna: []
        },

        irl: {
          label: 'The IRL',
          title: 'The death of the corridor.',
          body: 'Dark hallways became social and learning hubs. Static classrooms became six learning zones.',
          device: 'zones',
          zones: [
            { label: 'Caves', text: P('Quiet learning. Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { label: 'Campfires', text: P('Gathering. Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { label: 'Watering Holes', text: P('Informal exchange. Lorem ipsum dolor sit amet, consectetur.') },
            { label: 'Debate and Dialogue Hubs', text: 'They pull students off screens and into real conversation.' }
            // Zone names 5 and 6 are not in the deck. Add them here when confirmed.
          ]
        },

        story: {
          label: 'The story',
          title: 'The ethos, built in.',
          body: 'The story of the school of the future runs through the building, from writable walls to mobile green screens. Teachers and students co-designed the spaces in our vision workshops, so it’s their story, woven into the fabric of the school.',
          device: 'voices',
          voices: [
            { quote: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'), who: P('Teacher, name to be confirmed') },
            { quote: P('Ut enim ad minim veniam, quis nostrud exercitation ullamco.'), who: P('Student, name to be confirmed') }
          ]
        },

        structure: {
          label: 'From story to structure',
          title: 'Same footprint. A different idea of school.',
          device: 'gridbreak',
          // Illustrative diagram. Replace with a drawing based on the SGI plan.
          steps: ['Corridor', 'Break', 'Learning zones'],
          zoneLabels: ['Cave', 'Campfire', 'Watering Hole', 'Debate Hub'],
          heads: ['We believed', 'So we designed', 'So students'],
          rows: [
            ['Circulation is wasted learning time.', 'Dark hallways turned into social and learning hubs.', P('Lorem ipsum dolor sit amet, consectetur adipiscing.')],
            ['Different minds learn in different ways.', 'Six learning zones, from quiet Caves to Campfires and Watering Holes.', P('Lorem ipsum dolor sit amet, sed do eiusmod.')],
            ['Real conversation beats screen time.', 'Debate and Dialogue Hubs.', 'Get off screens and into real conversation.'],
            ['The school belongs to the people in it.', 'Spaces co-designed with teachers and students in vision workshops.', P('Lorem ipsum dolor sit amet, ut labore et dolore.')]
          ]
        },

        place: {
          label: 'The place',
          title: 'Sofia High School.',
          images: [
            { id: '80a5b0_fce75e472a57437786ed80cbcef011b8~mv2.jpg', alt: 'Sofia High School (render)', ratio: 16 / 9, caption: 'Render', size: 'wide' },
            { id: '80a5b0_f528ca859ad7446ba67308531d8db7be~mv2.jpg', alt: 'Sofia High School (render)', ratio: 719 / 885, caption: 'Render', size: 'half' },
            { id: '80a5b0_a4993bc953124331ac5a5e56d571017e~mv2.jpeg', alt: 'Sofia High School (render)', ratio: 3 / 2, caption: 'Render', size: 'half' }
          ]
        },

        outcome: {
          label: 'What it will become',
          statement: P('Lorem ipsum dolor sit amet, a school where learning happens everywhere.'),
          metrics: []
        }
      },

      /* ------------------------------------------------------------------
       * SAUDI F1 FAN ZONE
       * Sources: "F1 Jeddah Circuit Saudi Arabia, Fan zones" brief (Why, IRL,
       * Story), FFS deck v9 (the five zone names), and the seven concept renders.
       * Client, year and outcomes are not in the material yet.
       *
       * Renders: upload each file to Wix Media and paste its id. Until then the
       * `file` name shows in the asset slot so you know which render goes where.
       * ---------------------------------------------------------------- */
      'saudi-f1-fan-zone': {
        slug: 'saudi-f1-fan-zone',
        aliases: ['f1', 'saudif1fanzone'],
        name: 'Saudi F1 Fan Zone',
        hidden: true, // not live yet. Set to false to show it on the home page and in "Next project"
        // Dark field. The lime accent already matches the glow lines in the renders.
        theme: { mode: 'dark', accent: '#C4E83B' },
        facts: [
          ['Location', 'Jeddah, Saudi Arabia'],
          ['Venue', 'Jeddah circuit'],
          ['Sector', 'Fan experience'],
          ['Year', P('TBC')]
        ],
        proposition: 'Feel the thrill.',
        why: 'Bring the thrill of race day to everyone.',
        heroImage: { id: null, file: 'f1-aerial-night', alt: 'Aerial render of the fan zone at night: a lit karting circuit, towers and pavilions linked by glowing paths', ratio: 1902 / 1266, caption: 'Concept render · the fan zone at night', slot: 'f1-aerial-night' },
        homeImage: { id: null, file: 'f1-big-screen', alt: 'Render of fans gathered in front of a big screen showing a race', ratio: 1892 / 1266, slot: 'f1-big-screen' },

        question: {
          label: 'The question',
          lead: 'Most fans will never stand by the track.',
          problems: [],
          joinsTo: []
        },

        whyBlock: {
          statement: 'Bring the thrill of race day to everyone.',
          body: 'The fan zone had to deliver the emotion of Formula 1, not just screens and merchandise. Every decision was held against one question: how should a fan feel?',
          dnaLabel: '',
          dna: []
        },

        irl: {
          label: 'The IRL',
          title: 'A race you feel, not just watch.',
          body: 'Simulators, live commentary and podium moments, shared with thousands of other fans.',
          device: 'images',
          images: [
            { id: null, file: 'f1-big-screen', alt: 'Fans watching a race on a big screen under a ring-shaped canopy', ratio: 1892 / 1266, caption: 'Concept render · the race, shared', slot: 'f1-big-screen' },
            { id: null, file: 'f1-podium-plaza', alt: 'Families in a red and pink plaza with tensile canopies and a podium celebration on screen', ratio: 1900 / 1266, caption: 'Concept render · podium moments', slot: 'f1-podium-plaza' }
          ]
        },

        story: {
          label: 'The story',
          title: 'Race day, zone by zone.',
          body: 'The journey through the space follows the story of a race, from the start line to the podium. Each zone is named for a feeling, so the place tells the story as you walk through it.',
          device: 'image',
          image: { id: null, file: 'f1-karting-start-lights', alt: 'Two visitors watching karts climb a ramp beneath start lights', ratio: 886 / 1260, caption: 'Concept render · karting under the start lights', slot: 'f1-karting-start-lights' }
        },

        structure: {
          label: 'From story to structure',
          title: 'Five zones, one race.',
          device: 'track',
          zones: [
            { name: 'Feel the Thrill', text: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { name: 'Feel the Heritage', text: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { name: 'Feel the Build', text: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { name: 'Feel the Team Spirit', text: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.') },
            { name: 'Feel the Win', text: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.') }
          ],
          heads: ['We believed', 'So we designed', 'So fans'],
          rows: [
            ['Fans come for the emotion, not the screens and merchandise.', 'Five zones, each built around one emotion of F1.', 'Feel the race, not just watch it.'],
            ['A race is a story with a start and a finish.', 'A route that follows race day, from the start line to the podium.', 'Walk the story of a race, zone by zone.'],
            ['Thrill is bigger when it is shared.', 'Simulators, live commentary and podium moments.', 'Share it with thousands of other fans.']
          ]
        },

        place: {
          label: 'The place',
          title: 'Jeddah, race weekend.',
          images: [
            { id: null, file: 'f1-entrance-arches', alt: 'Visitors walking through green ribbon arches towards turnstiles, an F1 car on display', ratio: 1898 / 1266, caption: 'Concept render · entrance arches', size: 'wide', slot: 'f1-entrance-arches' },
            { id: null, file: 'f1-aerial-wheel', alt: 'Aerial render of a zone with a ferris wheel on the waterfront, linked by a yellow path', ratio: 1892 / 1264, caption: 'Concept render · the waterfront zone', size: 'half', slot: 'f1-aerial-wheel' },
            { id: null, file: 'f1-aerial-purple', alt: 'Aerial render of a purple-floored zone between two large buildings', ratio: 1892 / 1264, caption: 'Concept render · one zone from above', size: 'half', slot: 'f1-aerial-purple' }
          ]
        },

        outcome: {
          label: 'What it became',
          statement: P('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
          metrics: []
        }
      }
    }
  };

  /* ======================================================================
   * 2. DESIGN TOKENS + STYLES (scoped under .ffs)
   * ==================================================================== */

  const CSS = /* css */ `
.ffs{
  /* Layout: editorial column with full-bleed breaks; the skewed square is the one recurring device. */
  --ffs-lime:#C4E83B; --ffs-lime-logo:#D9F26A; --ffs-olive:#4F6119;
  --ffs-ink:#1F1C19; --ffs-warm:#5E5750; --ffs-stone:#8A8178;
  --ffs-cream:#F3EDE3; --ffs-white:#FFFFFF;
  --ffs-bg:var(--ffs-cream); --ffs-fg:var(--ffs-ink); --ffs-muted:var(--ffs-warm);
  --ffs-rule:rgba(31,28,25,.18); --ffs-accent:var(--ffs-lime); --ffs-on-accent:var(--ffs-ink);
  --ffs-slot:#E8E0D2;
  --font-display:'Fraunces',Georgia,'Times New Roman',serif;
  --font-ui:'Inter',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  --step--1:clamp(.72rem,.7rem + .1vw,.8rem);
  --step-0:clamp(1rem,.96rem + .2vw,1.125rem);
  --step-1:clamp(1.2rem,1.1rem + .5vw,1.5rem);
  --step-2:clamp(1.6rem,1.3rem + 1.4vw,2.6rem);
  --step-3:clamp(2.1rem,1.5rem + 3vw,4.4rem);
  --step-4:clamp(2.6rem,1.6rem + 5vw,6.5rem);
  --gutter:clamp(1rem,.5rem + 3vw,3.5rem);
  --measure:62ch;
  --ease:cubic-bezier(.2,.7,.1,1);
  --d1:240ms; --d2:640ms; --d3:1100ms;
  --skew:polygon(9% 0,100% 0,93% 100%,0 82%);
  --square:polygon(0 0,100% 0,100% 100%,0 100%);
  --header-offset:0px;
  background:var(--ffs-bg); color:var(--ffs-fg);
  font-family:var(--font-ui); font-size:var(--step-0); line-height:1.55;
  -webkit-font-smoothing:antialiased; display:block; width:100%; overflow-x:clip;
}
.ffs[data-mode="dark"]{
  --ffs-bg:#151311; --ffs-fg:#F3EDE3; --ffs-muted:#B4ABA0; --ffs-rule:rgba(243,237,227,.18); --ffs-slot:#2A2622;
}
.ffs *,.ffs *::before,.ffs *::after{box-sizing:border-box}
/* Reset uses :where() so component classes below always win */
.ffs :where(h1,h2,h3,p,ul,ol,figure,blockquote,dl,dd){margin:0;padding:0}
.ffs :where(ul,ol){list-style:none}
.ffs :where(a){color:inherit}
.ffs :where(img){display:block;max-width:100%}
.ffs :focus-visible{outline:2px solid var(--ffs-accent);outline-offset:3px}
.ffs :where(button){font:inherit;color:inherit;background:none;border:0;cursor:pointer}

.ffs-wrap{padding-inline:var(--gutter);max-width:1440px;margin-inline:auto}
.ffs-label{font-family:var(--font-ui);font-size:var(--step--1);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ffs-muted)}
.ffs-display{font-family:var(--font-display);font-weight:400;letter-spacing:-.015em;line-height:1.04;text-wrap:balance}
.ffs-lead{font-size:var(--step-1);line-height:1.45;max-width:var(--measure);text-wrap:pretty}
.ffs-body{max-width:var(--measure);color:var(--ffs-muted);text-wrap:pretty}
.ffs-section{padding-block:clamp(4rem,3rem + 6vw,9rem)}
.ffs-stack{display:grid;gap:1.25rem}

/* Placeholder flag, visible until real content replaces it */
.ffs-ph{background:repeating-linear-gradient(-45deg,transparent 0 6px,rgba(196,232,59,.22) 6px 12px)}
.ffs-ph::after{content:'Placeholder';display:inline-block;margin-left:.5em;padding:.1em .45em;font:600 .62rem/1.4 var(--font-ui);letter-spacing:.12em;text-transform:uppercase;background:var(--ffs-ink);color:var(--ffs-lime);vertical-align:.25em}
.ffs[data-mode="dark"] .ffs-ph::after{background:var(--ffs-lime);color:var(--ffs-ink)}

/* Image frame + asset slot. If the image is missing or fails, the slot label shows. */
.ffs-frame{position:relative;background:var(--ffs-slot);overflow:hidden;max-width:100%}
.ffs-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ffs-frame[data-empty]::before{content:attr(data-slot);position:absolute;z-index:1;left:14%;top:1.25rem;right:12%;font:600 var(--step--1)/1.3 var(--font-ui);letter-spacing:.12em;text-transform:uppercase;color:var(--ffs-muted)}
.ffs-frame[data-empty]::after{content:'';position:absolute;inset:0;background:
  linear-gradient(to top right,transparent calc(50% - .5px),var(--ffs-rule) 50%,transparent calc(50% + .5px)),
  linear-gradient(to top left,transparent calc(50% - .5px),var(--ffs-rule) 50%,transparent calc(50% + .5px))}
.ffs-frame[data-empty] img{display:none}

/* The skewed square: square → far from square */
.ffs-shape{clip-path:var(--skew)}
.ffs-motion .ffs-shape[data-settle]{clip-path:var(--square);transition:clip-path var(--d3) var(--ease)}
.ffs-motion .ffs-shape[data-settle].is-in{clip-path:var(--skew)}

/* Reveal: elements are visible at rest; only those below the fold at load animate in */
.ffs-motion [data-reveal].is-pending{opacity:0;transform:translateY(24px)}
.ffs-motion [data-reveal]{transition:opacity var(--d2) var(--ease),transform var(--d2) var(--ease)}

/* ---------------- HOME SECTION ---------------- */
.ffs-home{padding-block:clamp(4rem,3rem + 6vw,8rem)}
.ffs-home__head{display:grid;gap:1rem;grid-template-columns:1fr;align-items:end;padding-bottom:clamp(2.5rem,2rem + 3vw,5rem);border-bottom:1px solid var(--ffs-rule)}
.ffs-home__head h2{font-size:var(--step-3)}
@media (min-width:900px){.ffs-home__head{grid-template-columns:1.3fr 1fr;gap:3rem}}
.ffs-home__list{display:grid}
.ffs-row{display:grid;gap:1.5rem;padding-block:clamp(2.5rem,2rem + 3vw,5rem);border-bottom:1px solid var(--ffs-rule);text-decoration:none;color:inherit;position:relative}
.ffs-row__story{display:grid;gap:1rem;align-content:start;min-width:0}
.ffs-row__why{font-size:var(--step-2)}
.ffs-row__chain{display:flex;align-items:center;gap:.75rem;color:var(--ffs-muted)}
.ffs-row__line{flex:1;height:1px;background:var(--ffs-rule);position:relative;overflow:hidden;max-width:12rem}
.ffs-row__line::after{content:'';position:absolute;inset:0;background:var(--ffs-fg);transform:scaleX(0);transform-origin:left;transition:transform var(--d2) var(--ease)}
.ffs-row:hover .ffs-row__line::after,.ffs-row:focus-visible .ffs-row__line::after,.ffs-row.is-in .ffs-row__line::after{transform:scaleX(1)}
.ffs-row__place{display:grid;gap:.9rem;min-width:0}
.ffs-row__frame{aspect-ratio:3/2}
.ffs-row__name{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;flex-wrap:wrap}
.ffs-row__name h3{font-family:var(--font-display);font-weight:400;font-size:var(--step-1)}
.ffs-row__facts{font-size:var(--step--1);color:var(--ffs-muted);letter-spacing:.06em;text-transform:uppercase}
.ffs-cta{display:inline-flex;align-items:center;gap:.6rem;font-weight:600;font-size:.95rem;padding:.85rem 1.2rem;background:var(--ffs-ink);color:var(--ffs-cream);text-decoration:none;clip-path:polygon(0 0,100% 0,97% 100%,0 100%);transition:background var(--d1) var(--ease),color var(--d1) var(--ease)}
.ffs-cta svg{transition:transform var(--d1) var(--ease)}
.ffs-row:hover .ffs-cta,.ffs-row:focus-visible .ffs-cta{background:var(--ffs-lime);color:var(--ffs-ink)}
.ffs-row:hover .ffs-cta svg{transform:translateX(4px)}
.ffs-row__cta{justify-self:start}
@media (min-width:900px){
  .ffs-row{grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);gap:clamp(2rem,4vw,5rem);align-items:center}
  .ffs-home__list > li:nth-child(even) .ffs-row__story{order:2}
}

/* ---------------- CASE STUDY ---------------- */
.ffs-rail{position:fixed;left:clamp(.5rem,1.2vw,1.25rem);top:50%;transform:translateY(-50%);z-index:20;display:none;gap:.55rem;opacity:0;pointer-events:none;transition:opacity var(--d1) var(--ease)}
.ffs-rail.is-on{opacity:1;pointer-events:auto}
.ffs-rail a{display:block;width:14px;height:14px;background:var(--ffs-rule);clip-path:var(--skew);text-decoration:none;transition:background var(--d1) var(--ease),transform var(--d1) var(--ease)}
.ffs-rail a[aria-current="true"]{background:var(--ffs-accent);transform:scale(1.25)}
.ffs-rail a span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@media (min-width:1100px){.ffs-rail{display:grid}}
.ffs-progress{position:fixed;left:0;right:0;top:var(--header-offset);height:3px;z-index:20;background:transparent;pointer-events:none}
.ffs-progress i{display:block;height:100%;background:var(--ffs-accent);transform-origin:left;transform:scaleX(var(--p,0))}
@media (min-width:1100px){.ffs-progress{display:none}}

/* 01 Hero */
.ffs-hero{padding-top:clamp(2rem,1rem + 4vw,5rem);padding-bottom:clamp(3rem,2rem + 4vw,6rem)}
.ffs-hero__grid{display:grid;gap:clamp(1.5rem,3vw,3rem)}
.ffs-hero__title{display:grid;gap:1rem}
.ffs-hero__name{font-size:var(--step--1)}
.ffs-hero h1{font-size:var(--step-4)}
.ffs-hero__frame{aspect-ratio:3/2}
@media (min-width:900px){.ffs-hero__frame{aspect-ratio:16/8.5}}
.ffs-facts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem 1.5rem;border-top:1px solid var(--ffs-rule);padding-top:1.25rem}
.ffs-facts div{display:grid;gap:.25rem;min-width:0;align-content:start}
.ffs-facts dt{font-size:var(--step--1);letter-spacing:.14em;text-transform:uppercase;color:var(--ffs-muted);font-weight:600}
.ffs-facts dd{font-size:.98rem;font-variant-numeric:tabular-nums}
@media (min-width:900px){.ffs-facts{grid-template-columns:repeat(auto-fit,minmax(11rem,1fr))}}
.ffs-cap{font-size:var(--step--1);color:var(--ffs-muted);letter-spacing:.06em;text-transform:uppercase;margin-top:.6rem}

/* 02 + 03 Question → Why (cells join) */
.ffs-qw{background:var(--ffs-ink);color:var(--ffs-cream);--ffs-muted:#B4ABA0;--ffs-rule:rgba(243,237,227,.2)}
.ffs-qw__q{display:grid;gap:1.5rem}
.ffs-qw__q .ffs-display{font-size:var(--step-3)}
.ffs-cells{display:grid;grid-template-columns:1fr;gap:1rem;margin-top:clamp(2rem,4vw,4rem);transition:gap var(--d3) var(--ease)}
.ffs-cell{border:1px solid var(--ffs-rule);padding:1.5rem;min-height:9rem;display:grid;align-content:space-between;gap:1rem;transition:background var(--d3) var(--ease),color var(--d3) var(--ease),border-color var(--d3) var(--ease)}
.ffs-cell__p{font-family:var(--font-display);font-size:var(--step-1);line-height:1.2}
.ffs-cell__dna{font-family:var(--font-display);font-size:var(--step-2);font-weight:400;letter-spacing:-.01em;text-transform:none;line-height:1.1;margin-bottom:.35rem}
.ffs-cell__w{font-size:var(--step--1);font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:0;transform:translateY(6px);transition:opacity var(--d2) var(--ease) .3s,transform var(--d2) var(--ease) .3s}
@media (min-width:760px){.ffs-cells{grid-template-columns:repeat(3,minmax(0,1fr));gap:2.5rem}}
.ffs-qw.is-joined .ffs-cells{gap:0}
.ffs-qw.is-joined .ffs-cell{background:var(--ffs-lime);color:var(--ffs-ink);border-color:rgba(31,28,25,.25)}
.ffs-qw.is-joined .ffs-cell__w{opacity:1;transform:none}
.ffs-qw__why{display:grid;gap:1.5rem;margin-top:clamp(3rem,6vw,7rem)}
.ffs-qw__why .ffs-display{font-size:var(--step-4);color:var(--ffs-lime)}
.ffs-qw__why .ffs-body{color:var(--ffs-cream);font-size:var(--step-1);line-height:1.45}
.ffs-dna{display:flex;flex-wrap:wrap;gap:.5rem 2rem;align-items:baseline;border-top:1px solid var(--ffs-rule);padding-top:1.25rem;margin-top:1rem}
.ffs-dna li{font-family:var(--font-display);font-size:var(--step-2)}
.ffs-dna li.ffs-label{flex-basis:100%;font-family:var(--font-ui);font-size:var(--step--1);letter-spacing:.14em}
.ffs[data-mode="dark"] .ffs-qw{background:#0C0B0A}

/* 04 IRL switcher */
.ffs-irl__head{display:grid;gap:1.25rem;margin-bottom:clamp(2rem,4vw,3.5rem)}
.ffs-irl__head .ffs-display{font-size:var(--step-3);max-width:20ch}
.ffs-tabs{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.25rem}
.ffs-tab{padding:.7rem 1.1rem;border:1px solid var(--ffs-rule)!important;font-weight:600;font-size:.92rem;clip-path:polygon(0 0,100% 0,96% 100%,0 100%);transition:background var(--d1) var(--ease),color var(--d1) var(--ease)}
.ffs-tab[aria-selected="true"]{background:var(--ffs-ink);color:var(--ffs-cream)}
.ffs[data-mode="dark"] .ffs-tab[aria-selected="true"]{background:var(--ffs-lime);color:var(--ffs-ink)}
.ffs-stage{position:relative;aspect-ratio:4/5;overflow:hidden;background:var(--ffs-slot)}
@media (min-width:760px){.ffs-stage{aspect-ratio:16/8}}
.ffs-stage .ffs-frame{position:absolute;inset:0;transition:clip-path var(--d2) var(--ease)}
.ffs-stage .ffs-frame--l{clip-path:inset(0 0 0 0)}
.ffs-stage .ffs-frame--r{clip-path:inset(0 0 0 100%)}
.ffs-stage .ffs-frame--c{clip-path:inset(100% 0 0 0);z-index:1}
.ffs-stage .ffs-frame--f{clip-path:inset(0 50% 0 50%);z-index:1;transition-delay:0s}
.ffs-stage[data-state="family"] .ffs-frame--f{clip-path:inset(0 0 0 0);transition-delay:.35s}
.ffs-stage[data-state="community"] .ffs-frame--c{clip-path:inset(0 0 0 0)}
.ffs-stage[data-state="parent"] .ffs-frame--l{clip-path:inset(0 100% 0 0)}
.ffs-stage[data-state="parent"] .ffs-frame--r{clip-path:inset(0 0 0 0)}
.ffs-stage[data-state="family"] .ffs-frame--l,.ffs-stage[data-state="community"] .ffs-frame--l{clip-path:inset(0 50% 0 0)}
.ffs-stage[data-state="family"] .ffs-frame--r,.ffs-stage[data-state="community"] .ffs-frame--r{clip-path:inset(0 0 0 50%)}
@media (max-width:759px){
  .ffs-stage[data-state="family"] .ffs-frame--l,.ffs-stage[data-state="community"] .ffs-frame--l{clip-path:inset(0 0 50% 0)}
  .ffs-stage[data-state="family"] .ffs-frame--r,.ffs-stage[data-state="community"] .ffs-frame--r{clip-path:inset(50% 0 0 0)}
}
.ffs-divider{position:absolute;z-index:2;background:var(--ffs-cream);left:50%;top:0;bottom:0;width:6px;margin-left:-3px;transform:scaleY(0);transition:transform var(--d2) var(--ease)}
@media (max-width:759px){.ffs-divider{left:0;right:0;top:50%;bottom:auto;width:auto;height:6px;margin:-3px 0 0;transform:scaleX(0)}}
.ffs-stage[data-state="family"] .ffs-divider{transform:none;animation:ffs-dissolve var(--d3) var(--ease) .25s forwards}
@keyframes ffs-dissolve{to{opacity:0}}
.ffs-stage[data-state="community"] .ffs-divider{opacity:0}
.ffs-stage__tag{position:absolute;z-index:3;left:0;bottom:0;max-width:min(36rem,92%);background:var(--ffs-bg);color:var(--ffs-fg);padding:1.1rem 1.4rem 1.2rem;clip-path:polygon(0 0,100% 0,96% 100%,0 100%);font-family:var(--font-display);font-size:var(--step-1);line-height:1.25}
.ffs-irl__body{margin-top:1.25rem}

/* Zones selector (Sofia) */
.ffs-zones{display:grid;gap:0;border-top:1px solid var(--ffs-rule)}
.ffs-zone{border-bottom:1px solid var(--ffs-rule)}
.ffs-zone button{display:flex;width:100%;justify-content:space-between;align-items:baseline;gap:1rem;padding:1.25rem 0;text-align:left;font-family:var(--font-display);font-size:var(--step-2)}
.ffs-zone button span:last-child{font-family:var(--font-ui);font-size:1.5rem;transition:transform var(--d1) var(--ease)}
.ffs-zone button[aria-expanded="true"] span:last-child{transform:rotate(45deg)}
.ffs-zone__panel{padding-bottom:1.5rem;max-width:var(--measure);color:var(--ffs-muted)}

/* 05 Story */
.ffs-story{background:var(--ffs-bg)}
.ffs-story__grid{display:grid;gap:clamp(2rem,4vw,4rem)}
@media (min-width:900px){.ffs-story__grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr);align-items:end}}
.ffs-story .ffs-display{font-size:var(--step-3)}
.ffs-spectrum{position:relative;margin-top:clamp(2.5rem,5vw,5rem);padding-block:3.5rem 2rem}
.ffs-spectrum__bar{height:14px;background:linear-gradient(90deg,var(--ffs-lime),var(--ffs-olive) 60%,var(--ffs-cream));clip-path:polygon(0 0,100% 0,99% 100%,0 100%);border:1px solid var(--ffs-rule)}
.ffs-spectrum__ends{display:flex;justify-content:space-between;margin-top:.75rem}
.ffs-spectrum__mark{position:absolute;top:0;transform:translateX(-50%);display:grid;justify-items:center;gap:.4rem;white-space:nowrap}
.ffs-spectrum__mark b{font-family:var(--font-display);font-weight:400;font-size:var(--step-1)}
.ffs-spectrum__mark i{width:1px;height:1.6rem;background:var(--ffs-fg)}
@media (max-width:560px){.ffs-spectrum__mark b{font-size:1rem}}
.ffs-story__img{margin-top:clamp(2.5rem,5vw,4rem);max-width:30rem}
@media (min-width:900px){.ffs-story__img{margin-left:auto;width:min(38%,30rem)}}
.ffs-voices{display:grid;gap:1.5rem}
@media (min-width:760px){.ffs-voices{grid-template-columns:repeat(2,minmax(0,1fr))}}
.ffs-voice{border-left:3px solid var(--ffs-accent);padding:.25rem 0 .25rem 1.25rem;display:grid;gap:.75rem}
.ffs-voice q{font-family:var(--font-display);font-size:var(--step-1);line-height:1.3;quotes:'“' '”'}
.ffs-voice cite{font-style:normal;font-size:var(--step--1);letter-spacing:.1em;text-transform:uppercase;color:var(--ffs-muted)}

/* Materials (Casa Bala) */
.ffs-materials{display:grid;gap:0;margin-top:clamp(2.5rem,5vw,4rem);border-top:1px solid var(--ffs-rule)}
.ffs-material{display:grid;grid-template-columns:2.5rem minmax(0,1fr);column-gap:1.25rem;row-gap:.35rem;padding-block:1.4rem;border-bottom:1px solid var(--ffs-rule);align-items:start}
.ffs-material__swatch{grid-row:span 2;width:2.5rem;aspect-ratio:1;clip-path:var(--skew)}
.ffs-material h3{font-family:var(--font-display);font-weight:400;font-size:var(--step-1);line-height:1.2}
.ffs-material p{color:var(--ffs-muted);max-width:var(--measure)}
@media (min-width:900px){.ffs-material{grid-template-columns:3rem minmax(0,1fr) minmax(0,1.4fr);column-gap:2.5rem}.ffs-material__swatch{grid-row:auto;width:3rem}}

/* Brick wall (Casa Bala): courses laid from the foundation up */
.ffs-wall{margin:0 0 clamp(3rem,6vw,6rem)}
.ffs-wall__courses{display:flex;flex-direction:column-reverse;gap:6px}
.ffs-course{display:grid;grid-template-columns:.5fr 2fr .5fr;gap:6px}
.ffs-course:nth-child(even){grid-template-columns:1fr 2fr 0fr}
.ffs-course:nth-child(even) .ffs-brick--fill:last-child{display:none}
.ffs-brick{background:#7A3F2D;min-height:4.25rem;border-radius:1px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.25)}
.ffs-brick--fill{background:#5E3123}
.ffs-brick--label{display:grid;align-content:center;gap:.15rem;padding:.75rem 1.1rem;color:#F3EDE3;min-width:0}
.ffs-brick--label b{font-family:var(--font-display);font-weight:400;font-size:var(--step-1);line-height:1.15}
.ffs-brick--label span{font-size:.92rem;opacity:.85}
.ffs-course--top .ffs-brick--label{background:var(--ffs-accent);color:#1F1C19}
@media (min-width:900px){.ffs-brick{min-height:5.5rem}.ffs-course{grid-template-columns:1fr 1.6fr 1fr}.ffs-course:nth-child(even){grid-template-columns:.5fr 1.6fr 1.5fr}.ffs-course:nth-child(even) .ffs-brick--fill:last-child{display:block}}
.ffs-motion .ffs-course{transition:opacity var(--d2) var(--ease),transform var(--d2) var(--ease);transition-delay:calc(var(--i) * 260ms)}
.ffs-motion .ffs-wall:not(.is-in) .ffs-course{opacity:0;transform:translateY(-28px)}

/* 06 Story to structure */
.ffs-s2s{background:var(--ffs-lime);color:var(--ffs-ink);--ffs-muted:#3E4A14;--ffs-rule:rgba(31,28,25,.28);--ffs-slot:#B3D533}
.ffs[data-mode="dark"] .ffs-s2s{background:#1E1B18;color:var(--ffs-cream);--ffs-muted:#B4ABA0;--ffs-rule:rgba(243,237,227,.2);--ffs-slot:#2A2622}
.ffs-s2s__head{display:grid;gap:1.25rem;margin-bottom:clamp(2.5rem,5vw,5rem)}
.ffs-s2s__head .ffs-display{font-size:var(--step-3)}
.ffs-ledger{display:grid;border-top:2px solid currentColor}
.ffs-ledger__heads{display:none}
.ffs-ledger__row{display:grid;gap:0;padding-block:1.5rem;border-bottom:1px solid var(--ffs-rule)}
.ffs-ledger__cell{position:relative;padding:.4rem 0 .4rem 1.75rem;min-width:0}
.ffs-ledger__cell::before{content:attr(data-head);display:block;font-size:var(--step--1);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ffs-muted);margin-bottom:.25rem}
.ffs-ledger__cell::after{content:'';position:absolute;left:.45rem;top:.9rem;bottom:-.5rem;width:1px;background:currentColor;transform-origin:top;transform:scaleY(var(--draw,1));transition:transform var(--d2) var(--ease)}
.ffs-ledger__cell:last-child::after{display:none}
.ffs-ledger__cell .ffs-dot{position:absolute;left:0;top:.75rem;width:.95rem;height:.95rem;background:currentColor;clip-path:var(--skew)}
.ffs-ledger__tag{font-family:var(--font-ui)!important;font-size:var(--step--1)!important;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ffs-muted);margin-bottom:.4rem}
.ffs-ledger__cell:first-child p{font-family:var(--font-display);font-size:var(--step-1);line-height:1.25}
@media (min-width:900px){
  .ffs-ledger__heads{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2.5rem;padding-block:1rem;border-bottom:1px solid var(--ffs-rule)}
  .ffs-ledger__row{grid-template-columns:repeat(3,minmax(0,1fr));gap:2.5rem;padding-block:2rem}
  .ffs-ledger__cell{padding:0}
  .ffs-ledger__cell::before{display:none}
  .ffs-ledger__cell .ffs-dot{display:none}
  .ffs-ledger__cell::after{left:auto;right:-2.5rem;top:.85rem;bottom:auto;width:2.5rem;height:1px;transform-origin:left;transform:scaleX(var(--draw,1))}
}
.ffs-motion .ffs-ledger__row.is-pending .ffs-ledger__cell{--draw:0}
.ffs-motion .ffs-ledger__row.is-pending .ffs-ledger__cell + .ffs-ledger__cell{opacity:.15}
.ffs-motion .ffs-ledger__cell{transition:opacity var(--d2) var(--ease)}
.ffs-motion .ffs-ledger__cell:nth-child(2){transition-delay:.25s}
.ffs-motion .ffs-ledger__cell:nth-child(3){transition-delay:.5s}
.ffs-s2s__device{margin-bottom:clamp(3rem,6vw,6rem)}

/* Grid break (Sofia) */
.ffs-steps{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.25rem}
.ffs-gb{position:relative;aspect-ratio:4/3;max-width:100%;border:2px solid currentColor;background:transparent}
@media (min-width:760px){.ffs-gb{aspect-ratio:16/7}}
.ffs-gb__c{position:absolute;border:1px solid currentColor;background:var(--ffs-slot);transition:left var(--d3) var(--ease),top var(--d3) var(--ease),width var(--d3) var(--ease),height var(--d3) var(--ease),clip-path var(--d3) var(--ease),background var(--d2) var(--ease);display:flex;align-items:flex-start;padding:.7rem .7rem .7rem 14%;font-size:var(--step--1);font-weight:600;letter-spacing:.12em;text-transform:uppercase}
.ffs-gb__c span{opacity:0;transition:opacity var(--d2) var(--ease)}
.ffs-gb[data-step="2"] .ffs-gb__c span{opacity:1}
.ffs-gb[data-step="2"] .ffs-gb__c{background:var(--ffs-bg)}
.ffs-gb__corr{position:absolute;left:0;right:0;top:42%;height:16%;display:flex;align-items:center;justify-content:center;font-size:var(--step--1);letter-spacing:.14em;text-transform:uppercase;font-weight:600;transition:opacity var(--d2) var(--ease)}
.ffs-gb:not([data-step="0"]) .ffs-gb__corr{opacity:0}
.ffs-gb__note{margin-top:.75rem;font-size:var(--step--1);color:var(--ffs-muted)}

/* Track (F1) */
.ffs-track{position:relative;display:grid;gap:0;counter-reset:z}
.ffs-track::before{content:'';position:absolute;left:.6rem;top:0;bottom:0;width:2px;background:currentColor;transform-origin:top;transform:scaleY(var(--p,1))}
.ffs-stop{position:relative;padding:0 0 2.25rem 2.75rem;display:grid;gap:.4rem}
.ffs-stop::before{counter-increment:z;content:'';position:absolute;left:0;top:.35rem;width:1.35rem;height:1.35rem;background:var(--ffs-accent);clip-path:var(--skew)}
.ffs-stop__z{font-size:var(--step--1);font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ffs-muted)}
.ffs-stop__z::before{content:'Zone ' counter(z)}
.ffs-stop h3{font-family:var(--font-display);font-weight:400;font-size:var(--step-2);line-height:1.1}
.ffs-stop p{color:var(--ffs-muted);max-width:40ch}
@media (min-width:900px){
  .ffs-track{grid-template-columns:repeat(5,minmax(0,1fr));gap:2rem;padding-top:2.75rem}
  .ffs-track::before{left:0;right:0;top:.65rem;bottom:auto;width:auto;height:2px;transform-origin:left;transform:scaleX(var(--p,1))}
  .ffs-stop{padding:0}
  .ffs-stop::before{top:-2.75rem}
  .ffs-stop:last-child h3{color:var(--ffs-accent)}
}

/* 07 Place */
.ffs-place__head{display:grid;gap:1rem;margin-bottom:clamp(2rem,4vw,3.5rem)}
.ffs-place__head .ffs-display{font-size:var(--step-3)}
.ffs-gallery{display:grid;gap:clamp(1rem,2vw,2rem)}
.ffs-gallery{grid-template-columns:repeat(6,minmax(0,1fr))}
.ffs-gallery figure{grid-column:span 6;min-width:0}
.ffs-gallery figure[data-size="third"]{grid-column:span 2}
.ffs-gallery figure[data-size="third"] figcaption{font-size:.62rem;letter-spacing:.06em}
@media (min-width:760px){.ffs-gallery figure[data-size="half"]{grid-column:span 3}}
.ffs-gallery figcaption{display:flex;gap:.75rem;align-items:baseline;margin-top:.75rem;font-size:var(--step--1);letter-spacing:.1em;text-transform:uppercase;color:var(--ffs-muted);font-weight:600}
.ffs-gallery figcaption::before{content:'';width:.8rem;height:.8rem;background:var(--ffs-accent);clip-path:var(--skew);flex:none;align-self:center}

/* 08 Outcome */
.ffs-outcome{border-top:1px solid var(--ffs-rule)}
.ffs-outcome .ffs-display{font-size:var(--step-3);max-width:22ch;margin-top:1rem}
.ffs-metrics{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(10rem,1fr));margin-top:2.5rem}
.ffs-metrics b{display:block;font-family:var(--font-display);font-weight:400;font-size:var(--step-3);font-variant-numeric:tabular-nums}

/* 09 Next project + takeover */
.ffs-next{display:block;text-decoration:none;color:var(--ffs-ink);background:var(--ffs-lime);position:relative;overflow:hidden}
.ffs-next__in{display:grid;gap:1rem;padding-block:clamp(4rem,3rem + 6vw,9rem)}
.ffs-next .ffs-label{color:#3E4A14}
.ffs-next__why{font-family:var(--font-display);font-size:var(--step-2);line-height:1.15;max-width:24ch}
.ffs-next__name{font-family:var(--font-display);font-size:var(--step-4);line-height:1;letter-spacing:-.02em}
.ffs-next__go{display:inline-flex;gap:.6rem;align-items:center;font-weight:600}
.ffs-next__shape{position:absolute;right:var(--gutter);bottom:clamp(2rem,5vw,5rem);width:clamp(4rem,10vw,9rem);aspect-ratio:1;background:var(--ffs-ink);clip-path:var(--skew);transition:transform var(--d2) var(--ease)}
.ffs-next:hover .ffs-next__shape,.ffs-next:focus-visible .ffs-next__shape{transform:rotate(-6deg) scale(1.06)}
.ffs-takeover{position:fixed;inset:0;z-index:2147483000;background:var(--ffs-lime);clip-path:var(--skew);transform:scale(0);transform-origin:var(--ox,90%) var(--oy,90%);pointer-events:none}
.ffs-takeover.is-go{transition:transform 700ms var(--ease),clip-path 700ms var(--ease);transform:scale(1);clip-path:var(--square)}

@media (prefers-reduced-motion:reduce){
  .ffs *,.ffs *::before,.ffs *::after{transition:none!important;animation:none!important}
  .ffs [data-reveal].is-pending{opacity:1!important;transform:none!important}
}
`;

  /* ======================================================================
   * 3. HELPERS
   * ==================================================================== */

  const REDUCED = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /** Renders a string or a P() placeholder into escaped HTML. */
  const t = (v) => (v && typeof v === 'object' && v.ph) ? `<span class="ffs-ph">${esc(v.text)}</span>` : esc(v == null ? '' : v);
  const plain = (v) => (v && typeof v === 'object' && v.ph) ? v.text : String(v == null ? '' : v);

  const ARROW = '<svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" focusable="false"><path d="M0 6h16M11 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

  function injectOnce() {
    if (!document.getElementById('ffs-styles')) {
      const style = document.createElement('style');
      style.id = 'ffs-styles';
      style.textContent = CSS;
      document.head.appendChild(style);
    }
    // Fonts: skipped if the Wix site already loads Fraunces + Inter (set data-ffs-fonts="site" on the element to opt out)
    if (!document.getElementById('ffs-fonts') && !document.querySelector('[data-ffs-fonts="site"]')) {
      const pre = document.createElement('link');
      pre.rel = 'preconnect'; pre.href = 'https://fonts.gstatic.com'; pre.crossOrigin = '';
      const link = document.createElement('link');
      link.id = 'ffs-fonts'; link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..500&family=Inter:wght@400;500;600&display=swap';
      document.head.append(pre, link);
    }
  }

  /**
   * Wix Media image with a responsive srcset. Wix resizes and encodes on the fly
   * via the URL, so one uploaded original serves every screen.
   */
  const WIDTHS = [480, 800, 1200, 1600, 2200];
  function wixUrl(id, w, ratio) {
    const h = Math.round(w / ratio);
    const name = id.split('~')[0];
    return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_avif,quality_auto/${name}.avif`;
  }
  function frame(img, { cls = '', sizes = '100vw', eager = false, shape = false, settle = false } = {}) {
    const ratio = img.ratio || 3 / 2;
    const slot = esc(img.slot || img.file || 'Image to supply');
    const shapeAttrs = shape ? ` ffs-shape" ${settle ? 'data-settle' : ''}` : '"';
    if (img.src && !img.id) {
      return `<div class="ffs-frame ${cls}${shapeAttrs} data-slot="ASSET · ${slot}">
      <img${img.position ? ` style="object-position:${esc(img.position)}"` : ''} src="${esc(img.src)}" alt="${esc(img.alt || '')}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">
    </div>`;
    }
    if (!img.id) {
      return `<div class="ffs-frame ${cls}${shapeAttrs} data-empty data-slot="ASSET · ${slot}" role="img" aria-label="${esc(img.alt || '')}"></div>`;
    }
    const srcset = WIDTHS.map((w) => `${wixUrl(img.id, w, ratio)} ${w}w`).join(', ');
    const loading = eager ? 'eager" fetchpriority="high' : 'lazy';
    return `<div class="ffs-frame ${cls}${shapeAttrs} data-slot="ASSET · ${slot}">
      <img${img.position ? ` style="object-position:${esc(img.position)}"` : ''} src="${wixUrl(img.id, 1200, ratio)}" srcset="${srcset}" sizes="${sizes}" alt="${esc(img.alt || '')}" loading="${loading}" decoding="async" width="1200" height="${Math.round(1200 / ratio)}">
    </div>`;
  }
  /** If an image fails (missing asset, blocked host), show the labelled slot instead. */
  function guardImages(root) {
    root.querySelectorAll('.ffs-frame img').forEach((im) => {
      const fail = () => im.parentElement && im.parentElement.setAttribute('data-empty', '');
      if (im.complete && im.naturalWidth === 0 && im.currentSrc) fail();
      im.addEventListener('error', fail, { once: true });
    });
  }

  function findProject(key) {
    if (!key) return null;
    const k = String(key).toLowerCase();
    const all = FFS_DATA.projects;
    if (all[k]) return all[k];
    return Object.values(all).find((p) => (p.aliases || []).includes(k)) || null;
  }
  function slugFromUrl() {
    const parts = location.pathname.split('/').filter(Boolean);
    return parts[parts.length - 1] || '';
  }
  function projectHref(base, slug) {
    if (base === '#') return `#${slug}`;
    return `${base.replace(/\/?$/, '/')}${slug}`;
  }
  function factLine(p, keys = ['Location', 'Sector', 'Year']) {
    return p.facts.filter(([k]) => keys.includes(k)).map(([, v]) => plain(v)).join(' · ');
  }

  /**
   * Reveal + settle. Content below the fold at load starts slightly offset and
   * eases in; anything already on screen is shown at rest immediately.
   */
  function observe(root, onEnter) {
    const items = root.querySelectorAll('[data-reveal], [data-settle], [data-watch]');
    if (REDUCED() || !('IntersectionObserver' in window)) {
      items.forEach((el) => { el.classList.remove('is-pending'); el.classList.add('is-in'); onEnter && onEnter(el); });
      return null;
    }
    root.classList.add('ffs-motion');
    const vh = window.innerHeight || 800;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.remove('is-pending');
        e.target.classList.add('is-in');
        onEnter && onEnter(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
    items.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top > vh * 0.9) { if (el.hasAttribute('data-reveal')) el.classList.add('is-pending'); io.observe(el); }
      else { requestAnimationFrame(() => { el.classList.add('is-in'); onEnter && onEnter(el); }); }
    });
    return io;
  }

  /** Square takeover into the next page. The link still works without JS or with reduced motion. */
  function takeover(a) {
    a.addEventListener('click', (ev) => {
      if (REDUCED() || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#')) return; // hash links (preview) navigate instantly
      ev.preventDefault();
      const r = a.querySelector('.ffs-next__shape')?.getBoundingClientRect();
      const o = document.createElement('div');
      o.className = 'ffs-takeover';
      if (r) { o.style.setProperty('--ox', `${r.left + r.width / 2}px`); o.style.setProperty('--oy', `${r.top + r.height / 2}px`); }
      (a.closest('.ffs') || document.body).appendChild(o);
      requestAnimationFrame(() => requestAnimationFrame(() => o.classList.add('is-go')));
      setTimeout(() => { location.href = href; }, 680);
    });
  }

  /* ======================================================================
   * 4. <ffs-projects>  · Home page section
   *    Attributes:
   *      base-url   Where project pages live. Default "/projects/"
   *      projects   Optional comma list of slugs to show, in order
   * ==================================================================== */

  class FfsProjects extends HTMLElement {
    connectedCallback() {
      if (this._done) return; this._done = true;
      injectOnce();
      const base = this.getAttribute('base-url') || '/projects/';
      const attr = this.getAttribute('projects');
      const order = attr
        ? attr.split(',').map((s) => s.trim()).filter(Boolean)
        : FFS_DATA.order.filter((k) => !FFS_DATA.projects[k].hidden);
      const h = FFS_DATA.home;
      const rows = order.map(findProject).filter(Boolean).map((p, i) => `
        <li>
          <a class="ffs-row" href="${esc(projectHref(base, p.liveSlug || p.slug))}" data-watch aria-label="${esc(p.name)}. ${esc(plain(p.why))} ${esc(h.cta)}">
            <div class="ffs-row__story">
              <p class="ffs-label">The why</p>
              <p class="ffs-display ffs-row__why">${t(p.why)}</p>
              <div class="ffs-row__chain" aria-hidden="true"><span class="ffs-label">Story</span><span class="ffs-row__line"></span><span class="ffs-label">Place</span></div>
            </div>
            <div class="ffs-row__place">
              ${frame(p.homeImage, { cls: 'ffs-row__frame', sizes: '(min-width:900px) 50vw, 100vw', shape: true, settle: true })}
              <div class="ffs-row__name"><h3>${esc(p.name)}</h3><span class="ffs-row__facts">${esc(factLine(p))}</span></div>
              <span class="ffs-cta ffs-row__cta">${esc(h.cta)} ${ARROW}</span>
            </div>
          </a>
        </li>`).join('');

      this.innerHTML = `
        <section class="ffs ffs-home" aria-labelledby="ffs-home-title">
          <div class="ffs-wrap">
            <header class="ffs-home__head">
              <div class="ffs-stack"><p class="ffs-label">${esc(h.eyebrow)}</p><h2 id="ffs-home-title" class="ffs-display">${esc(h.title)}</h2></div>
              <p class="ffs-body">${esc(h.intro)}</p>
            </header>
            <ol class="ffs-home__list" role="list">${rows}</ol>
          </div>
        </section>`;
      const root = this.querySelector('.ffs');
      guardImages(root);
      observe(root);
    }
  }

  /* ======================================================================
   * 5. <ffs-case-study>  · One project page
   *    Attributes:
   *      project        Slug from FFS_DATA. If omitted, read from the URL,
   *                     so one Wix dynamic page template can serve all projects.
   *      base-url       Where project pages live. Default "/projects/"
   *      skip-hero      Present = the Wix page provides its own native H1 hero
   *      header-offset  Height of a fixed Wix header in px (for the mobile progress bar)
   * ==================================================================== */

  class FfsCaseStudy extends HTMLElement {
    static get observedAttributes() { return ['project']; }
    attributeChangedCallback() { if (this._done) this.render(); }
    connectedCallback() { if (this._done) return; this._done = true; injectOnce(); this.render(); }
    disconnectedCallback() { this.cleanup(); }

    cleanup() {
      (this._offs || []).forEach((f) => f());
      this._offs = [];
    }

    render() {
      this.cleanup();
      const p = findProject(this.getAttribute('project') || slugFromUrl());
      if (!p) {
        // On a shared Wix dynamic page, projects without a story collapse so the
        // page's native content shows instead. An explicit wrong slug shows a notice.
        if (this.hasAttribute('project')) this.innerHTML = '<div class="ffs"><div class="ffs-wrap ffs-section"><p class="ffs-label">Project not found: check the project attribute</p></div></div>';
        else { this.innerHTML = ''; this.style.display = 'none'; }
        return;
      }
      this.style.display = '';
      const base = this.getAttribute('base-url') || '/projects/';
      const live = FFS_DATA.order.filter((k) => !FFS_DATA.projects[k].hidden || k === p.slug);
      const idx = live.indexOf(p.slug);
      const next = findProject(live[(idx + 1) % live.length]);
      const id = (s) => `ffs-${p.slug}-${s}`;

      const chapters = [];
      const ch = (key, label, html) => { chapters.push({ key, label }); return html.replace('data-ch', `id="${id(key)}" data-ch="${key}"`); };

      /* 01 Hero */
      const heroHtml = this.hasAttribute('skip-hero') ? '' : ch('hero', 'Project', `
        <header class="ffs-hero" data-ch>
          <div class="ffs-wrap ffs-hero__grid">
            <div class="ffs-hero__title">
              <p class="ffs-label ffs-hero__name">${esc(p.name)}</p>
              <h1 class="ffs-display">${t(p.proposition)}</h1>
            </div>
            <figure>
              ${frame(p.heroImage, { cls: 'ffs-hero__frame', eager: true, shape: true, settle: true })}
              ${p.heroImage.caption ? `<figcaption class="ffs-cap">${t(p.heroImage.caption)}</figcaption>` : ''}
            </figure>
            <dl class="ffs-facts">${p.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${t(v)}</dd></div>`).join('')}</dl>
          </div>
        </header>`);

      /* 02 + 03 Question → Why */
      const q = p.question, w = p.whyBlock;
      const cells = q.problems.length ? `
        <ol class="ffs-cells" role="list">${q.problems.map((pr, i) => `
          <li class="ffs-cell"><p class="ffs-cell__p">${t(pr)}</p>${cellJoin(q.joinsTo[i])}</li>`).join('')}
        </ol>` : '';
      function cellJoin(j) {
        if (!j) return '';
        if (typeof j === 'string') return `<p class="ffs-cell__w">${esc(j)} wellbeing</p>`;
        return `<div class="ffs-cell__w"><p class="ffs-cell__dna">${esc(j.dna)}</p><p>${esc(j.wellbeing)}</p></div>`;
      }
      const qwHtml = ch('why', 'The why', `
        <section class="ffs-qw ffs-section" data-ch aria-labelledby="${id('why-h')}">
          <div class="ffs-wrap">
            <div class="ffs-qw__q" data-reveal>
              <p class="ffs-label">${esc(q.label)}</p>
              <p class="ffs-display">${t(q.lead)}</p>
            </div>
            ${cells}
            <div class="ffs-qw__why" data-join>
              <p class="ffs-label">The why</p>
              <h2 id="${id('why-h')}" class="ffs-display">${t(w.statement)}</h2>
              <p class="ffs-body">${t(w.body)}</p>
              ${w.dna.length ? `<ul class="ffs-dna" role="list"><li class="ffs-label">${esc(w.dnaLabel)}</li>${w.dna.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : ''}
            </div>
          </div>
        </section>`);

      /* 04 IRL */
      const irl = p.irl;
      let irlDevice = '';
      if (irl.device === 'switcher') {
        irlDevice = `
          <div class="ffs-tabs" role="tablist" aria-label="See the place as">
            ${irl.states.map((s, i) => `<button class="ffs-tab" role="tab" id="${id('tab-' + s.key)}" aria-controls="${id('stage')}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-state="${s.key}">${esc(s.label)}</button>`).join('')}
          </div>
          <div class="ffs-stage" id="${id('stage')}" role="tabpanel" aria-labelledby="${id('tab-' + irl.states[0].key)}" data-state="${irl.states[0].key}">
            ${frame(irl.images.left, { cls: 'ffs-frame--l', sizes: '100vw' })}
            ${frame(irl.images.right, { cls: 'ffs-frame--r', sizes: '100vw' })}
            ${irl.images.family ? frame(irl.images.family, { cls: 'ffs-frame--f', sizes: '100vw' }) : ''}
            ${irl.images.community ? frame(irl.images.community, { cls: 'ffs-frame--c', sizes: '100vw' }) : ''}
            <span class="ffs-divider" aria-hidden="true"></span>
            <p class="ffs-stage__tag" aria-live="polite">${t(irl.states[0].text)}</p>
          </div>`;
      } else if (irl.device === 'zones') {
        irlDevice = `<ul class="ffs-zones" role="list">${irl.zones.map((z, i) => `
          <li class="ffs-zone">
            <button aria-expanded="${i === 0}" aria-controls="${id('zone-' + i)}"><span>${esc(z.label)}</span><span aria-hidden="true">+</span></button>
            <div class="ffs-zone__panel" id="${id('zone-' + i)}" ${i === 0 ? '' : 'hidden'}><p>${t(z.text)}</p></div>
          </li>`).join('')}</ul>`;
      }
      if (irl.device === 'images') {
        irlDevice = `<div class="ffs-gallery">${irl.images.map((im) => `
          <figure data-size="${im.size || 'half'}" data-reveal>
            ${frame(im, { sizes: '(min-width:760px) 50vw, 100vw' }).replace('class="ffs-frame', `style="aspect-ratio:${im.ratio || 1.5}" class="ffs-frame`)}
            ${im.caption ? `<figcaption>${t(im.caption)}</figcaption>` : ''}
          </figure>`).join('')}</div>`;
      }
      const irlHtml = ch('irl', 'The IRL', `
        <section class="ffs-irl ffs-section" data-ch aria-labelledby="${id('irl-h')}">
          <div class="ffs-wrap">
            <div class="ffs-irl__head" data-reveal>
              <p class="ffs-label">${esc(irl.label)}</p>
              <h2 id="${id('irl-h')}" class="ffs-display">${t(irl.title)}</h2>
              <p class="ffs-lead">${t(irl.body)}</p>
            </div>
            ${irlDevice}
          </div>
        </section>`);

      /* 05 Story */
      const st = p.story;
      let storyDevice = '';
      if (st.device === 'spectrum') {
        storyDevice = `<div class="ffs-spectrum" aria-label="${esc(st.ends[0])} to ${esc(st.ends[1])}" role="img">
          ${st.marks.map((m) => `<span class="ffs-spectrum__mark" style="left:${m.at}%"><b>${esc(m.word)}</b><i></i></span>`).join('')}
          <div class="ffs-spectrum__bar"></div>
          <div class="ffs-spectrum__ends"><span class="ffs-label">${esc(st.ends[0])}</span><span class="ffs-label">${esc(st.ends[1])}</span></div>
        </div>`;
      } else if (st.device === 'voices') {
        storyDevice = `<div class="ffs-voices" style="margin-top:clamp(2.5rem,5vw,4rem)">${st.voices.map((v) => `
          <blockquote class="ffs-voice" data-reveal><q>${t(v.quote)}</q><cite>${t(v.who)}</cite></blockquote>`).join('')}</div>`;
      }
      if (st.device === 'materials') {
        storyDevice = `<ul class="ffs-materials" role="list">${st.materials.map((m) => `
          <li class="ffs-material" data-reveal><span class="ffs-material__swatch" style="background:${esc(m.swatch)}" aria-hidden="true"></span><h3>${esc(m.name)}</h3><p>${t(m.text)}</p></li>`).join('')}</ul>`;
      }
      if (st.device === 'image') {
        storyDevice = `<figure class="ffs-story__img" data-reveal>
          ${frame(st.image, { sizes: '(min-width:900px) 40vw, 100vw', shape: true, settle: true }).replace('class="ffs-frame', `style="aspect-ratio:${st.image.ratio || 0.75}" class="ffs-frame`)}
          ${st.image.caption ? `<figcaption class="ffs-cap">${t(st.image.caption)}</figcaption>` : ''}
        </figure>`;
      }
      const storyHtml = ch('story', 'The story', `
        <section class="ffs-story ffs-section" data-ch aria-labelledby="${id('story-h')}" style="border-top:1px solid var(--ffs-rule)">
          <div class="ffs-wrap">
            <div class="ffs-story__grid" data-reveal>
              <div class="ffs-stack"><p class="ffs-label">${esc(st.label)}</p><h2 id="${id('story-h')}" class="ffs-display">${t(st.title)}</h2></div>
              <p class="ffs-lead">${t(st.body)}</p>
            </div>
            ${storyDevice}
          </div>
        </section>`);

      /* 06 From story to structure */
      const s = p.structure;
      let sDevice = '';
      if (s.device === 'gridbreak') {
        sDevice = `<div class="ffs-s2s__device">
          <div class="ffs-steps" role="tablist" aria-label="Plan transformation">
            ${s.steps.map((label, i) => `<button class="ffs-tab" role="tab" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" aria-controls="${id('gb')}" data-step="${i}">${esc(label)}</button>`).join('')}
          </div>
          <div class="ffs-gb" id="${id('gb')}" role="img" aria-label="A corridor plan of identical classrooms breaks apart into learning zones" data-step="0">
            ${Array.from({ length: 8 }, (_, i) => `<div class="ffs-gb__c" data-i="${i}"><span>${esc(s.zoneLabels[Math.floor(i / 2)] || '')}</span></div>`).join('')}
            <div class="ffs-gb__corr">Corridor</div>
          </div>
          <p class="ffs-gb__note">Illustrative diagram, not to scale. <span class="ffs-ph">To be redrawn from the SGI plan.</span></p>
        </div>`;
      } else if (s.device === 'bricks') {
        sDevice = `<figure class="ffs-s2s__device ffs-wall" data-watch>
          <ol class="ffs-wall__courses" role="list" aria-label="${esc(s.wallCaption)} From the foundation up.">${s.courses.map((c, i) => `
            <li class="ffs-course${c.top ? ' ffs-course--top' : ''}" style="--i:${i}">
              <span class="ffs-brick ffs-brick--fill" aria-hidden="true"></span>
              <span class="ffs-brick ffs-brick--label"><b>${esc(c.title)}</b><span>${t(c.text)}</span></span>
              <span class="ffs-brick ffs-brick--fill" aria-hidden="true"></span>
            </li>`).join('')}
          </ol>
          <figcaption class="ffs-cap">${esc(s.wallCaption)}</figcaption>
        </figure>`;
      } else if (s.device === 'track') {
        sDevice = `<div class="ffs-s2s__device"><ol class="ffs-track" role="list" data-watch>${s.zones.map((z) => `
          <li class="ffs-stop"><span class="ffs-stop__z"></span><h3>${esc(z.name)}</h3><p>${t(z.text)}</p></li>`).join('')}</ol></div>`;
      }
      const ledger = `
        <div class="ffs-ledger" role="table" aria-label="${esc(s.title)}">
          <div class="ffs-ledger__heads" role="row">${s.heads.map((hd) => `<span class="ffs-label" role="columnheader">${esc(hd)}</span>`).join('')}</div>
          ${s.rows.map((row) => { const r = Array.isArray(row) ? row : row.cells; const tag = Array.isArray(row) ? '' : row.tag; return `<div class="ffs-ledger__row" role="row" data-reveal>${r.map((c, i) => `
            <div class="ffs-ledger__cell" role="cell" data-head="${esc(s.heads[i])}"><span class="ffs-dot" aria-hidden="true"></span>${i === 0 && tag ? `<p class="ffs-ledger__tag">${esc(tag)}</p>` : ''}<p>${t(c)}</p></div>`).join('')}</div>`; }).join('')}
        </div>`;
      const s2sHtml = ch('structure', 'Story to structure', `
        <section class="ffs-s2s ffs-section" data-ch aria-labelledby="${id('s2s-h')}">
          <div class="ffs-wrap">
            <div class="ffs-s2s__head" data-reveal>
              <p class="ffs-label">${esc(s.label)}</p>
              <h2 id="${id('s2s-h')}" class="ffs-display">${t(s.title)}</h2>
            </div>
            ${sDevice}
            ${ledger}
          </div>
        </section>`);

      /* 07 Place */
      const pl = p.place;
      const placeHtml = ch('place', 'The place', `
        <section class="ffs-place ffs-section" data-ch aria-labelledby="${id('place-h')}">
          <div class="ffs-wrap">
            <div class="ffs-place__head" data-reveal><p class="ffs-label">${esc(pl.label)}</p><h2 id="${id('place-h')}" class="ffs-display">${t(pl.title)}</h2></div>
            <div class="ffs-gallery">${pl.images.map((im) => `
              <figure data-size="${im.size || 'half'}" data-reveal>
                ${frame(im, { sizes: im.size === 'wide' ? '100vw' : '(min-width:760px) 50vw, 100vw' }).replace('class="ffs-frame', `style="aspect-ratio:${im.ratio || 1.5}" class="ffs-frame`)}
                ${im.caption ? `<figcaption>${t(im.caption)}</figcaption>` : ''}
              </figure>`).join('')}
            </div>
          </div>
        </section>`);

      /* 08 Outcome */
      const o = p.outcome;
      const outcomeHtml = ch('outcome', o.label, `
        <section class="ffs-outcome ffs-section" data-ch aria-labelledby="${id('out-h')}">
          <div class="ffs-wrap" data-reveal>
            <p class="ffs-label">${esc(o.label)}</p>
            <h2 id="${id('out-h')}" class="ffs-display">${t(o.statement)}</h2>
            ${o.body ? `<p class="ffs-lead" style="margin-top:1.5rem">${t(o.body)}</p>` : ''}
            ${o.metrics.length ? `<dl class="ffs-metrics">${o.metrics.map((m) => `<div><dt class="ffs-label">${esc(m.label)}</dt><dd><b>${esc(m.value)}</b></dd></div>`).join('')}</dl>` : ''}
          </div>
        </section>`);

      /* 09 Next */
      const nextHtml = next && next.slug !== p.slug ? ch('next', 'Next project', `
        <a class="ffs-next" data-ch href="${esc(projectHref(base, next.liveSlug || next.slug))}">
          <div class="ffs-wrap ffs-next__in">
            <p class="ffs-label">Next project</p>
            <p class="ffs-next__why">${t(next.why)}</p>
            <p class="ffs-next__name">${esc(next.name)}</p>
            <span class="ffs-next__go">Read the story ${ARROW}</span>
          </div>
          <span class="ffs-next__shape" aria-hidden="true"></span>
        </a>`) : '';

      const rail = `<nav class="ffs-rail" aria-label="Chapters">${chapters.map((c) => `<a href="#${id(c.key)}" data-to="${c.key}"><span>${esc(c.label)}</span></a>`).join('')}</nav>`;

      this.innerHTML = `
        <article class="ffs ffs-case" data-mode="${p.theme.mode}" style="--ffs-accent:${esc(p.theme.accent)};--header-offset:${parseInt(this.getAttribute('header-offset') || '0', 10)}px" aria-label="${esc(p.name)} case study">
          ${rail}
          <div class="ffs-progress" aria-hidden="true"><i></i></div>
          ${heroHtml}${qwHtml}${irlHtml}${storyHtml}${s2sHtml}${placeHtml}${outcomeHtml}${nextHtml}
        </article>`;

      const root = this.querySelector('.ffs');
      guardImages(root);
      this.wire(root, p);
    }

    wire(root, p) {
      const offs = this._offs;

      // Question → Why: the three separate problems join into one idea.
      const qw = root.querySelector('.ffs-qw');
      const joinTarget = root.querySelector('[data-join]');
      if (qw && joinTarget) joinTarget.setAttribute('data-watch', '');

      const io = observe(root, (el) => {
        if (el === joinTarget) qw.classList.add('is-joined');
      });
      if (io) offs.push(() => io.disconnect());

      // IRL switcher: tabs with arrow-key support. Tap or click, never hover.
      const stage = root.querySelector('.ffs-stage');
      if (stage && p.irl.states) {
        const tabs = [...root.querySelectorAll('.ffs-tabs .ffs-tab')];
        const tag = stage.querySelector('.ffs-stage__tag');
        const select = (btn, focus) => {
          tabs.forEach((b) => { const on = b === btn; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
          const st = p.irl.states.find((s) => s.key === btn.dataset.state);
          stage.dataset.state = st.key;
          stage.setAttribute('aria-labelledby', btn.id);
          tag.innerHTML = t(st.text);
          if (focus) btn.focus();
        };
        tabsKeys(tabs, select);
      }

      // Zones accordion (Sofia)
      root.querySelectorAll('.ffs-zone button').forEach((b) => {
        b.addEventListener('click', () => {
          const open = b.getAttribute('aria-expanded') === 'true';
          b.setAttribute('aria-expanded', !open);
          document.getElementById(b.getAttribute('aria-controls')).hidden = open;
        });
      });

      // Grid break (Sofia): same footprint, three states.
      const gb = root.querySelector('.ffs-gb');
      if (gb) {
        const L = [ // [left, top, width, height, clip] in %, per step
          // Step 0: two rows of identical classrooms either side of a corridor
          (i) => [(i % 4) * 25, i < 4 ? 0 : 58, 25, 42, 'var(--square)'],
          // Step 1: cells shear and drift; the corridor stops being a corridor
          (i) => [[2, 24, 52, 74, 4, 28, 50, 76][i], [4, 0, 10, 2, 52, 58, 48, 56][i], 22, 40, ['polygon(0 6%,100% 0,94% 100%,4% 92%)', 'polygon(8% 0,100% 4%,96% 100%,0 96%)'][i % 2]],
          // Step 2: merged zones of different shapes, circulation becomes space
          // Pairs of cells merge: Cave, Campfire, Watering Hole, Debate Hub
          (i) => [[0, 0, 36, 36, 66, 66, 0, 0][i], [0, 0, 0, 0, 0, 0, 58, 58][i], [36, 36, 30, 30, 34, 34, 66, 66][i], [58, 58, 58, 58, 100, 100, 42, 42][i], 'var(--skew)']
        ];
        const cellsEl = [...gb.querySelectorAll('.ffs-gb__c')];
        const place = (step) => {
          gb.dataset.step = step;
          cellsEl.forEach((c, i) => {
            const [l, tp, wd, ht, cp] = L[step](i);
            Object.assign(c.style, { left: l + '%', top: tp + '%', width: wd + '%', height: ht + '%', clipPath: cp });
            // In the zones state, duplicate cells merge visually; only one label per zone shows
            c.querySelector('span').style.visibility = (step === 2 && i % 2 === 0) ? 'hidden' : '';
          });
        };
        place(0);
        const steps = [...root.querySelectorAll('.ffs-steps .ffs-tab')];
        tabsKeys(steps, (btn, focus) => {
          steps.forEach((b) => { const on = b === btn; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
          place(Number(btn.dataset.step));
          if (focus) btn.focus();
        });
      }

      // Chapter rail + mobile progress (one passive, rAF-throttled scroll listener)
      const links = [...root.querySelectorAll('.ffs-rail a')];
      const rail = root.querySelector('.ffs-rail');
      const bar = root.querySelector('.ffs-progress');
      const secs = links.map((a) => root.querySelector(`[data-ch="${a.dataset.to}"]`));
      let ticking = false;
      const update = () => {
        ticking = false;
        const r = root.getBoundingClientRect();
        const vh = window.innerHeight;
        const prog = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
        const inView = r.top < vh * 0.5 && r.bottom > vh * 0.5;
        rail.classList.toggle('is-on', inView);
        bar.style.opacity = inView ? 1 : 0;
        bar.firstElementChild.style.setProperty('--p', prog.toFixed(4));
        let cur = 0;
        secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < vh * 0.45) cur = i; });
        links.forEach((a, i) => a.setAttribute('aria-current', i === cur ? 'true' : 'false'));
      };
      const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      offs.push(() => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); });
      links.forEach((a) => a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = root.querySelector(`[data-ch="${a.dataset.to}"]`);
        target && target.scrollIntoView({ behavior: REDUCED() ? 'auto' : 'smooth', block: 'start' });
      }));
      update();

      const nextA = root.querySelector('.ffs-next');
      if (nextA) takeover(nextA);
    }
  }

  /** Shared tablist behaviour: click, plus Left/Right/Home/End keys. */
  function tabsKeys(tabs, select) {
    tabs.forEach((b, i) => {
      b.addEventListener('click', () => select(b, false));
      b.addEventListener('keydown', (e) => {
        const map = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
        if (!(e.key in map)) return;
        e.preventDefault();
        select(tabs[(map[e.key] + tabs.length) % tabs.length], true);
      });
    });
  }

  /* ======================================================================
   * 6. REGISTER
   *    Wix asks for a tag name per Custom Element. Use exactly:
   *    ffs-projects  and  ffs-case-study
   * ==================================================================== */
  if (!customElements.get('ffs-projects')) customElements.define('ffs-projects', FfsProjects);
  if (!customElements.get('ffs-case-study')) customElements.define('ffs-case-study', FfsCaseStudy);

  // Exposed for debugging and for the local preview page.
  window.FFS = { data: FFS_DATA, version: '1.0.0' };
})();
