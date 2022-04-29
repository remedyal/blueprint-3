<template>
  <div class="masthead-container" id="navbar" onclick="">
    <section class="bp-section bp-masthead">
      <div class="bp-container">
        <div class="row is-multiline is-vcentered masthead-layout-container">
          <div class="col is-9-desktop is-12-touch has-text-centered-touch">
            <div class="masthead-layout" id="bp-masthead">
              <!-- <span
                class="sgds-icon sgds-icon-sg-crest is-size-5"
                style="color: red"
              ></span> -->
              <span style="display: table-cell; vertical-align: middle">
                <span class="banner-text-layout">
                  <!-- <span class="is-text">
                    A Singapore Government Agency Website&ensp;
                  </span> -->
                  <span
                    class="bp-masthead-button"
                    id="masthead-dropdown-button"
                  >
                    <!-- <span class="is-text bp-masthead-button-text">
                      How to identify
                    </span> -->
                    <!-- <span
                      class="sgds-icon sgds-icon-chevron-down is-size-7"
                      id="masthead-chevron"
                    ></span> -->
                  </span>
                </span>
              </span>
            </div>
            <div
              class="masthead-divider is-hidden"
              id="masthead-divider"
              style="padding-left: -12px; padding-right: -12px"
            ></div>
          </div>
          <div class="col banner-content-layout is-hidden" id="banner-content">
            <div class="banner-content">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/2ec2122b2010672b9cbb6efb5138048d8aff4a09/5d1ab/assets/img/government_building.svg"
                class="banner-icon"
              />
              <div class="banner-content-text-container">
                <strong class="banner-content-title"
                  >Official website links end with .gov.sg</strong
                >
                <p>
                  Government agencies communicate via
                  <strong> .gov.sg </strong>
                  websites <span class="avoidwrap">(e.g. go.gov.sg/open)</span>.
                  <a
                    href="https://go.gov.sg/trusted-sites"
                    class="
                      banner-content-text
                      bp-masthead-button-link bp-masthead-button-text
                    "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Trusted website<text style="letter-spacing: -3px">s</text>
                  </a>
                </p>
              </div>
            </div>
            <div class="banner-content">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg"
                class="banner-icon"
              />
              <div class="banner-content-text-container">
                <strong class="banner-content-title"
                  >Secure websites use HTTPS</strong
                >
                <p>
                  Look for a
                  <strong> lock </strong>(<img
                    src="https://d33wubrfki0l68.cloudfront.net/aecdf1b88c0edfa72e7fef099f28e93b80c8336a/8c6a1/assets/img/lock.svg"
                    class="inline-banner-icon"
                  />) or https:// as an added precaution. Share sensitive
                  information only on official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav class="navbar is-transparent">
      <div class="bp-container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/988001f339078e9818409804588332e2a4d54b64/ae8c1/images/isomer-logo.svg"
              alt="Homepage"
              style="
                max-height: 75px;
                max-width: 200px;
                height: auto;
                width: auto;
              "
            />
          </a>
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="navbarExampleTransparentExample"
          class="bp-container is-fluid margin--none navbar-menu"
        >
          <div class="navbar-start">
            <div class="navbar-item is-hidden-widescreen is-search-bar">
              <form action="/search/" method="get">
                <div class="field has-addons">
                  <div class="control has-icons-left is-expanded">
                    <input
                      class="input is-fullwidth"
                      id="search-box-mobile"
                      type="text"
                      placeholder="What are you looking for?"
                      name="query"
                    />
                    <span class="is-large is-left">
                      <i class="sgds-icon sgds-icon-search search-bar"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a
                class="navbar-link is-uppercase"
                href="/get-started/about-isomer/"
                >Get started</a
              >
              <div class="navbar-dropdown">
                <a
                  class="navbar-item sub-link"
                  href="/get-started/about-isomer/"
                  >About</a
                ><a class="navbar-item sub-link" href="/get-started/onboard/"
                  >Get onboard</a
                >
              </div>
              <div
                class="selector is-hidden-touch is-hidden-desktop-only"
              ></div>
            </div>
            <div class="navbar-item">
              <a
                href="/users/"
                class="navbar-item is-uppercase"
                style="height: 100%; width: 100%"
                >Our Users</a
              >
              <div
                class="selector is-hidden-touch is-hidden-desktop-only"
              ></div>
            </div>
            <div class="navbar-item">
              <a
                href="/faq/"
                class="navbar-item is-uppercase"
                style="height: 100%; width: 100%"
                >FAQ</a
              >
              <div
                class="selector is-hidden-touch is-hidden-desktop-only"
              ></div>
            </div>
            <div class="navbar-item">
              <a
                href="https://guide.isomer.gov.sg"
                target="_blank"
                rel="noreferrer"
                class="navbar-item is-uppercase"
                style="height: 100%; width: 100%"
                >Guide</a
              >
              <div
                class="selector is-hidden-touch is-hidden-desktop-only"
              ></div>
            </div>
            <div class="navbar-item">
              <a
                href="https://github.com/isomerpages"
                target="_blank"
                rel="noreferrer"
                class="navbar-item is-uppercase"
                style="height: 100%; width: 100%"
                >Github</a
              >
              <div
                class="selector is-hidden-touch is-hidden-desktop-only"
              ></div>
            </div>
          </div>

          <div class="navbar-end is-hidden-touch is-hidden-desktop-only">
            <div class="navbar-item">
              <a
                class="bp-button is-text is-large"
                style="text-decoration: none"
                id="search-activate"
              >
                <span class="sgds-icon sgds-icon-search is-size-4"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div
      class="
        bp-container
        hide
        is-hidden-touch is-hidden-desktop-only
        search-bar
      "
      id="search-bar"
    >
      <div class="row margin--top--sm margin--bottom--sm is-gapless">
        <div class="col">
          <form action="/search/" method="get">
            <div class="field has-addons">
              <div class="control has-icons-left is-expanded">
                <input
                  class="input is-fullwidth is-large"
                  id="search-box"
                  type="text"
                  placeholder="What are you looking for?"
                  name="query"
                  autocomplete="off"
                />
                <span class="is-large is-left">
                  <i
                    class="sgds-icon sgds-icon-search is-size-4 search-bar"
                  ></i>
                </span>
              </div>
              <div class="control">
                <button
                  type="submit"
                  class="
                    bp-button
                    is-secondary is-medium
                    has-text-white
                    search-button
                  "
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>