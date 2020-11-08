# timelangs

A customizable timeline about the history of programming languages,
served as a static single-page web application.

## User manual

Go to [ggiuffre.github.io/timelangs](https://ggiuffre.github.io/timelangs)
and choose a topic you're insterested in. Once you've entered a topic in the
search box and hit "Submit", you'll see a list of languages related to that
topic -- in chronological order, so that you can have an idea of which
languages pioneered a certain functionality/paradigm.

Each programming language is displayed together with its **birth year** and a
list of **related topics**. Click on a topic to see which languages are
involved with it.

Tip: you can hit submit even without entering any topic in the search box.
This will display all programming languages currently available on the app.

Further tip: once you've looked up a specific topic, you can **share a link**
to it by just copying the URL in your browser. The URL updates automatically
each time you hit "Submit"!

## Developer manual

This is a simple React app with only four components:

* an `App` component that renders a search box and a timeline;
* a `FilterForm` component (the search box);
* a `Timeline` component (the timeline) that renders several programming
  languages;
* a `TimelineItem` component (a programming language), that renders the name
  and birth year of a language, together with a list of topics that can be
  associated to this language.

Currently the app is static (doesn't make any network requests).

Test the app with `yarn test`, run it locally with `yarn start`, or try live
at [ggiuffre.github.io/timelangs](https://ggiuffre.github.io/timelangs).
