(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1229],
  {
    39263: function (s, e, i) {
      Promise.resolve().then(i.bind(i, 48322));
    },
    48322: function (s, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return c;
          },
        });
      var a = i(57437),
        l = i(87490),
        n = i(87138),
        t = i(2265),
        r = i(21932);
      function c() {
        let [s, e] = (0, t.useState)("monthly"),
          i = (s) => {
            e(s);
          },
          c =
            "monthly" === s
              ? {
                  standardPrice: "49",
                  standardType: "/ month",
                  businessPrice: "69",
                  businessType: "/ month",
                  enterprisePrice: "99",
                  enterpriseType: "/ month",
                }
              : {
                  standardPrice: "441",
                  standardType: "/ year",
                  businessPrice: "621",
                  businessType: "/ year",
                  enterprisePrice: "891",
                  enterpriseType: "/ year",
                };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(l.default, {
            children: [
              (0, a.jsxs)("section", {
                className: "section-page-header py-10 fix position-relative",
                children: [
                  (0, a.jsx)("div", {
                    className: "container position-relative z-1",
                    children: (0, a.jsxs)("div", {
                      className: "text-start",
                      children: [
                        (0, a.jsx)("h3", { children: "Pricing" }),
                        (0, a.jsxs)("div", {
                          className: "d-flex",
                          children: [
                            (0, a.jsx)(n.default, {
                              href: "#",
                              children: (0, a.jsx)("p", {
                                className: "mb-0 text-900",
                                children: "Home",
                              }),
                            }),
                            (0, a.jsx)("svg", {
                              className: "mx-3 mt-1",
                              xmlns: "http://www.w3.org/2000/svg",
                              width: 8,
                              height: 13,
                              viewBox: "0 0 8 13",
                              fill: "none",
                              children: (0, a.jsx)("path", {
                                className: "stroke-dark",
                                d: "M1 1.5L6.5 6.75L1 12",
                                stroke: "#111827",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-primary mb-0",
                              children: "Pricing",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "position-absolute bottom-0 start-0 end-0 top-0 z-0",
                    src: "/assets/imgs/page-header/bg-line.png",
                    alt: "infinia",
                  }),
                  (0, a.jsxs)("div", {
                    className: "bouncing-blobs-container",
                    children: [
                      (0, a.jsx)("div", { className: "bouncing-blobs-glass" }),
                      (0, a.jsxs)("div", {
                        className: "bouncing-blobs",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "position-absolute top-0 start-0 translate-middle-y bouncing-blob--green",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "position-absolute top-0 end-0 bouncing-blob--primary",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                className:
                  "section-pricing-1 position-relative pb-120 pt-120 overflow-hidden",
                children: [
                  (0, a.jsxs)("div", {
                    className: "container",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "row pb-9 position-relative z-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-lg-auto me-lg-auto",
                            children: (0, a.jsxs)("div", {
                              className: "text-start mb-lg-0 mb-5",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2",
                                  "data-aos": "zoom-in",
                                  "data-aos-delay": 100,
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: "/assets/imgs/features-1/dots.png",
                                      alt: "infinia",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase",
                                      children: "our plans",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("h3", {
                                  className: "ds-3 my-3",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 200,
                                  children: "Pricing Plans",
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-5 mb-0",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 300,
                                  children:
                                    "⚡We’ve got a pricing plan that’s perfect for you",
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-lg-auto align-self-end",
                            children: (0, a.jsx)("div", {
                              className: "d-flex justify-content-lg-end",
                              children: (0, a.jsxs)("ul", {
                                className:
                                  "list-unstyled d-flex align-items-center change-price-plan bg-white rounded-pill py-1 shadow-2",
                                children: [
                                  (0, a.jsx)("li", {
                                    children: (0, a.jsx)(n.default, {
                                      href: "#",
                                      scroll: !1,
                                      className:
                                        "px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ".concat(
                                          "monthly" === s ? "active" : ""
                                        ),
                                      onClick: () => i("monthly"),
                                      "data-type": "monthly",
                                      children: "Monthly",
                                    }),
                                  }),
                                  (0, a.jsx)("li", {
                                    children: (0, a.jsx)(n.default, {
                                      href: "#",
                                      scroll: !1,
                                      className:
                                        "yearly px-md-6 px-2 py-2 rounded-pill bg-transparent text-900 fs-5 fw-bold ".concat(
                                          "yearly" === s ? "active" : ""
                                        ),
                                      onClick: () => i("yearly"),
                                      "data-type": "yearly",
                                      children: "Yearly (Save 25%)",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "row backdrop-filter-lg rounded-4 position-relative z-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4",
                            children: (0, a.jsxs)("div", {
                              className:
                                "backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-end-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Trial Plan" }),
                                (0, a.jsx)("p", {
                                  className: "fs-7",
                                  children: "Protect for testing",
                                }),
                                (0, a.jsx)("h3", {
                                  className: "text-primary mt-3 mb-0",
                                  children: "Free",
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "30 days trial",
                                }),
                                (0, a.jsxs)("button", {
                                  className:
                                    "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-dark",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "#111827",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Single Team Member",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Over 1200 UI Blocks",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "10 GB of Cloud Storage",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-secondary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2 text-400",
                                          children: "Personal Email Account",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-secondary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2 text-400",
                                          children: "Priority Support",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4",
                            children: (0, a.jsxs)("div", {
                              className:
                                "backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0 rounded-end-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Standard" }),
                                (0, a.jsx)("p", {
                                  className: "fs-7",
                                  children: "Great for large teams",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "d-flex",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "fs-5 text-600 me-1",
                                      children: "$",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-primary mb-0 text-price-standard",
                                      children: c.standardPrice,
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "fs-5 text-600 ms-1 fw-bold align-self-end text-type-standard",
                                      children: c.standardType,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "No credit card required",
                                }),
                                (0, a.jsxs)("button", {
                                  className:
                                    "btn btn-gradient w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-white",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "white",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "05 Team Member",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "All multimedia channels",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "All advanced CRM features",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Up to 15,000 contacts",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children:
                                            "24/7 Support (Email, Chat)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4",
                            children: (0, a.jsxs)("div", {
                              className:
                                "backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 rounded-start-lg-0 rounded-end-lg-0 border-start-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Business" }),
                                (0, a.jsx)("p", {
                                  className: "fs-7",
                                  children: "Advanced projects",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "d-flex",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "fs-5 text-600 me-1",
                                      children: "$",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-primary mb-0 text-price-business",
                                      children: c.businessPrice,
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "fs-5 text-600 ms-1 fw-bold align-self-end text-type-business",
                                      children: c.businessType,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "No credit card required",
                                }),
                                (0, a.jsxs)("button", {
                                  className:
                                    "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-dark",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "#111827",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "50 Team Member",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Over 1500 UI Blocks",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "100 GB of Cloud Storage",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Personal Email Account",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Priority Support",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "col-lg-3 col-sm-6 px-lg-0 mb-lg-0 mb-4",
                            children: (0, a.jsxs)("div", {
                              className:
                                "backdrop-filter-md h-100 p-6 position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Enterprise" }),
                                (0, a.jsx)("p", {
                                  className: " fs-7",
                                  children: "For big companies",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "d-flex",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "fs-5 text-600 me-1",
                                      children: "$",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-primary mb-0 text-price-enterprise",
                                      children: c.enterprisePrice,
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise",
                                      children: c.enterpriseType,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "No credit card required",
                                }),
                                (0, a.jsxs)("button", {
                                  className:
                                    "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-dark",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "#111827",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Customized features",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Scalability  security",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Account manager",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Unlimited chat history",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "50 Integrations",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "rotate-center ellipse-rotate-success position-absolute z-0",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "rotate-center-rev ellipse-rotate-primary position-absolute z-0",
                  }),
                ],
              }),
              (0, a.jsx)("section", {
                className:
                  "section-pricing-2 position-relative section-padding",
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-lg-6 position-relative pe-8",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "text-start mb-lg-0 mb-5",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2",
                                "data-aos": "zoom-in",
                                "data-aos-delay": 100,
                                children: [
                                  (0, a.jsx)("img", {
                                    src: "/assets/imgs/features-1/dots.png",
                                    alt: "infinia",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase",
                                    children: "our plans",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("h3", {
                                className: "ds-3 my-3",
                                "data-aos": "fade-zoom-in",
                                "data-aos-delay": 0,
                                children: "Pick Your Premium",
                              }),
                              (0, a.jsx)("p", {
                                className: "fs-6 mb-0",
                                "data-aos": "fade-zoom-in",
                                "data-aos-delay": 200,
                                children:
                                  "Upgrade to Spotify Premium and take your music journey to the next level. Enjoy uninterrupted music playback, even in offline mode",
                              }),
                              (0, a.jsxs)("div", {
                                className: "d-md-flex align-items-center mt-4",
                                children: [
                                  (0, a.jsxs)("ul", {
                                    className: "list-unstyled phase-items mb-0",
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mt-2",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/hero-2/check.png",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "ms-2",
                                            children: "Get 30 day free trial",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mt-2",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/hero-2/check.png",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "ms-2",
                                            children: "You can cancel anytime",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("ul", {
                                    className:
                                      "list-unstyled phase-items ms-md-5 mb-0",
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mt-2",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/hero-2/check.png",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "ms-2",
                                            children: "No any hidden fees pay",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mt-2",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/hero-2/check.png",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "ms-2",
                                            children: "Monthly management",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mt-lg-10 pt-5 pe-lg-10 me-lg-10",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "pt-lg-10",
                                    children:
                                      "Trusted by secure payment service",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "carouselTicker carouselTicker-left position-relative z-1",
                                    children: (0, a.jsx)("ul", {
                                      className: "carouselTicker__list",
                                      children: (0, a.jsxs)(r.default, {
                                        children: [
                                          (0, a.jsx)("li", {
                                            className:
                                              "carouselTicker__item m-0",
                                            children: (0, a.jsx)("img", {
                                              className: "rounded-4",
                                              src: "/assets/imgs/pricing-2/logo-1.png",
                                              alt: "inexa",
                                            }),
                                          }),
                                          (0, a.jsx)("li", {
                                            className:
                                              "carouselTicker__item m-0",
                                            children: (0, a.jsx)("img", {
                                              className: "rounded-4",
                                              src: "/assets/imgs/pricing-2/logo-2.png",
                                              alt: "inexa",
                                            }),
                                          }),
                                          (0, a.jsx)("li", {
                                            className:
                                              "carouselTicker__item m-0",
                                            children: (0, a.jsx)("img", {
                                              className: "rounded-4",
                                              src: "/assets/imgs/pricing-2/logo-3.png",
                                              alt: "inexa",
                                            }),
                                          }),
                                          (0, a.jsx)("li", {
                                            className:
                                              "carouselTicker__item m-0",
                                            children: (0, a.jsx)("img", {
                                              className: "rounded-4",
                                              src: "/assets/imgs/pricing-2/logo-4.png",
                                              alt: "inexa",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "position-absolute top-0 end-0 translate-middle-y mt-3 me-8",
                            children: (0, a.jsx)("img", {
                              className: "flickering",
                              src: "/assets/imgs/pricing-2/star.png",
                              alt: "infinia",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-6",
                        children: (0, a.jsxs)("div", {
                          className: "row mt-lg-0 mt-5",
                          children: [
                            (0, a.jsx)("div", {
                              className: "col-lg-6 col-sm-6 mb-lg-0 mb-4",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "p-6 bg-white position-relative border rounded-4 z-1",
                                children: [
                                  (0, a.jsx)("h6", { children: "Trial Plan" }),
                                  (0, a.jsx)("p", {
                                    className: "fs-7",
                                    children: "Protect for testing",
                                  }),
                                  (0, a.jsx)("h3", {
                                    className: "text-primary mt-3 mb-0",
                                    children: "Free",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "fs-8",
                                    children: "30 days trial",
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                    children: [
                                      "Get Started",
                                      (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: 24,
                                        height: 24,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: (0, a.jsx)("path", {
                                          className: "fill-dark",
                                          d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                          fill: "#111827",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("ul", {
                                    className: "list-unstyled mb-0",
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "Single Team Member",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "Over 1200 UI Blocks",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "10 GB of Cloud Storage",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-secondary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className:
                                              "fs-6 mb-0 ms-2 text-400",
                                            children: "Personal Email Account",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "d-flex align-items-center",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-secondary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className:
                                              "fs-6 mb-0 ms-2 text-400",
                                            children: "Priority Support",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "col-lg-6 col-sm-6 mb-lg-0 mb-4",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "p-6 bg-primary-soft position-relative border rounded-4 z-1",
                                children: [
                                  (0, a.jsx)("h6", { children: "Premium" }),
                                  (0, a.jsx)("p", {
                                    className: "fs-7",
                                    children: "Great for large teams",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "d-flex",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "fs-5 text-600 me-1",
                                        children: "$",
                                      }),
                                      (0, a.jsx)("h3", {
                                        className: "text-primary mb-0",
                                        children: "49",
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "fs-5 text-600 ms-1 fw-bold align-self-end",
                                        children: "/mon",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "fs-8",
                                    children: "No credit card required",
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "btn btn-gradient w-100 d-flex justify-content-between my-5",
                                    children: [
                                      "Get Started",
                                      (0, a.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: 24,
                                        height: 24,
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: (0, a.jsx)("path", {
                                          className: "fill-white",
                                          d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                          fill: "white",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("ul", {
                                    className: "list-unstyled mb-0",
                                    children: [
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "05 Team Member",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "All multimedia channels",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children:
                                              "All advanced CRM features",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "Up to 15,000 contacts",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "100 GB Cloud Storage",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className:
                                          "d-flex align-items-center mb-4",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children:
                                              "Individual Email Account",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("li", {
                                        className: "d-flex align-items-center",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/assets/imgs/pricing-1/check-primary.svg",
                                            alt: "infinia",
                                          }),
                                          (0, a.jsx)("h6", {
                                            className: "fs-6 mb-0 ms-2",
                                            children: "Premium Support",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("section", {
                className:
                  "section-pricing-2 position-relative fix section-padding",
                children: [
                  (0, a.jsxs)("div", {
                    className: "container position-relative z-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "text-center mb-8",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "d-flex align-items-center position-relative z-2 justify-content-center bg-primary-soft d-inline-flex rounded-pill border border-2 border-white px-3 py-1",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/assets/imgs/features-1/dots.png",
                                alt: "infinia",
                              }),
                              (0, a.jsx)("span", {
                                className:
                                  "tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase",
                                children: "Our Pricing",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("h3", {
                            className: "ds-3 my-3 fw-bold",
                            children: [
                              "Straightforward",
                              (0, a.jsxs)("span", {
                                className: " fw-regular",
                                children: [
                                  "Pricing ",
                                  (0, a.jsx)("br", {
                                    className: "d-none d-lg-inline",
                                  }),
                                  "Custom",
                                ],
                              }),
                              "Integrations",
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className: "fs-5 mb-0",
                            children: [
                              "Meet the talented and passionate team members who drive our ",
                              (0, a.jsx)("br", {
                                className: "d-none d-lg-inline",
                              }),
                              "company forward every day.",
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "d-flex justify-content-center mt-5",
                            children: (0, a.jsxs)("ul", {
                              className:
                                "list-unstyled d-flex align-items-center change-price-plan bg-white rounded-pill py-1 shadow-2",
                              children: [
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(n.default, {
                                    href: "#",
                                    scroll: !1,
                                    className:
                                      "px-6 py-2 text-900 bg-transparent monthly rounded-pill text-white fs-5 fw-bold z-1 ".concat(
                                        "monthly" === s ? "active" : ""
                                      ),
                                    onClick: () => i("monthly"),
                                    "data-type": "monthly",
                                    children: "Monthly",
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  children: (0, a.jsx)(n.default, {
                                    href: "#",
                                    scroll: !1,
                                    className:
                                      "yearly px-md-6 px-2 py-2 rounded-pill bg-transparent text-900 fs-5 fw-bold ".concat(
                                        "yearly" === s ? "active" : ""
                                      ),
                                    onClick: () => i("yearly"),
                                    "data-type": "yearly",
                                    children: "Yearly (Save 25%)",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "row justify-content-center align-items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4 ",
                            children: (0, a.jsxs)("div", {
                              className:
                                "p-6 bg-white position-relative border rounded-4 z-1 rounded-end-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Trial Plan" }),
                                (0, a.jsx)("p", {
                                  className: "fs-7",
                                  children: "Protect for testing",
                                }),
                                (0, a.jsx)("h3", {
                                  className: "text-primary mt-3 mb-0",
                                  children: "Free",
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "30 days trial",
                                }),
                                (0, a.jsxs)(n.default, {
                                  href: "#",
                                  className:
                                    "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-dark",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "#111827",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Single Team Member",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Over 1200 UI Blocks",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "10 GB of Cloud Storage",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-secondary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2 text-400",
                                          children: "Personal Email Account",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-secondary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2 text-400",
                                          children: "Priority Support",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "col-lg-4 col-md-12 mb-lg-0 mb-4 px-lg-0",
                            children: (0, a.jsxs)("div", {
                              className:
                                "p-8 bg-linear-2 position-relative border rounded-4 z-1 border-start-lg-0",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "position-absolute top-0 end-0 z-0",
                                  children: (0, a.jsx)("img", {
                                    src: "/assets/imgs/pricing-3/bg-line-1.png",
                                    alt: "infinia",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "position-relative z-1",
                                  children: [
                                    (0, a.jsx)("h6", {
                                      className: "text-white",
                                      children: "Standard",
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "fs-7 text-white",
                                      children: "Great for large teams",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "d-flex",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "fs-2 me-1 text-white",
                                          children: "$",
                                        }),
                                        (0, a.jsx)("h1", {
                                          className:
                                            "m-0 text-price-standard fw-black text-white",
                                          children: c.standardPrice,
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "fs-2 text-white ms-1 fw-bold align-self-end text-type-standard",
                                          children: c.standardType,
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("p", {
                                      className: "text-white opacity-50",
                                      children: "No credit card required",
                                    }),
                                    (0, a.jsxs)("ul", {
                                      className: "list-unstyled mb-0 mt-3",
                                      children: [
                                        (0, a.jsxs)("li", {
                                          className:
                                            "d-flex align-items-center mb-4",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/assets/imgs/pricing-3/check-white.svg",
                                              alt: "infinia",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className:
                                                "fs-6 mb-0 ms-2 text-white",
                                              children: "05 Team Member",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("li", {
                                          className:
                                            "d-flex align-items-center mb-4",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/assets/imgs/pricing-3/check-white.svg",
                                              alt: "infinia",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className:
                                                "fs-6 mb-0 ms-2 text-white",
                                              children:
                                                "All multimedia channels",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("li", {
                                          className:
                                            "d-flex align-items-center mb-4",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/assets/imgs/pricing-3/check-white.svg",
                                              alt: "infinia",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className:
                                                "fs-6 mb-0 ms-2 text-white",
                                              children:
                                                "All advanced CRM features",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("li", {
                                          className:
                                            "d-flex align-items-center mb-4",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/assets/imgs/pricing-3/check-white.svg",
                                              alt: "infinia",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className:
                                                "fs-6 mb-0 ms-2 text-white",
                                              children: "Up to 15,000 contacts",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("li", {
                                          className:
                                            "d-flex align-items-center",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src: "/assets/imgs/pricing-3/check-white.svg",
                                              alt: "infinia",
                                            }),
                                            (0, a.jsx)("h6", {
                                              className:
                                                "fs-6 mb-0 ms-2 text-white",
                                              children:
                                                "24/7 Support (Email, Chat)",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)(n.default, {
                                      href: "#",
                                      className:
                                        "btn bg-white-keep text-primary hover-up w-100 d-flex justify-content-between mt-5",
                                      children: [
                                        "Get Started",
                                        (0, a.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: 24,
                                          height: 24,
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: (0, a.jsx)("path", {
                                            d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                            fill: "#6d4df2",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "col-lg-3 col-md-12 px-lg-0 mb-lg-0 mb-4",
                            children: (0, a.jsxs)("div", {
                              className:
                                "p-6 bg-white position-relative border rounded-4 z-1 border-start-lg-0 rounded-start-lg-0",
                              children: [
                                (0, a.jsx)("h6", { children: "Enterprise" }),
                                (0, a.jsx)("p", {
                                  className: " fs-7",
                                  children: "For big companies",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "d-flex",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "fs-5 text-600 me-1",
                                      children: "$",
                                    }),
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-primary mb-0 text-price-enterprise",
                                      children: c.enterprisePrice,
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "fs-5 text-600 ms-1 fw-bold align-self-end text-type-enterprise",
                                      children: c.enterpriseType,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className: "fs-8",
                                  children: "No credit card required",
                                }),
                                (0, a.jsxs)(n.default, {
                                  href: "#",
                                  className:
                                    "btn btn-outline-secondary hover-up w-100 d-flex justify-content-between my-5",
                                  children: [
                                    "Get Started",
                                    (0, a.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 24,
                                      height: 24,
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: (0, a.jsx)("path", {
                                        className: "fill-dark",
                                        d: "M17.4177 5.41797L16.3487 6.48705L21.1059 11.2443H0V12.7562H21.1059L16.3487 17.5134L17.4177 18.5825L24 12.0002L17.4177 5.41797Z",
                                        fill: "#111827",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("ul", {
                                  className: "list-unstyled mb-0",
                                  children: [
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Customized features",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Scalability  security",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Account manager",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className:
                                        "d-flex align-items-center mb-4",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "Unlimited chat history",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("li", {
                                      className: "d-flex align-items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/assets/imgs/pricing-1/check-primary.svg",
                                          alt: "infinia",
                                        }),
                                        (0, a.jsx)("h6", {
                                          className: "fs-6 mb-0 ms-2",
                                          children: "50 Integrations",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "row mt-10",
                        children: (0, a.jsxs)("div", {
                          className:
                            "d-flex align-items-center justify-content-lg-cener justify-content-center",
                          children: [
                            (0, a.jsxs)(n.default, {
                              href: "#",
                              className: "btn btn-gradient",
                              children: [
                                "Get Free Quote",
                                (0, a.jsxs)("svg", {
                                  className: "ms-2",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 24,
                                  height: 24,
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  children: [
                                    (0, a.jsx)("path", {
                                      className: "stroke-white",
                                      d: "M17.25 15.25V6.75H8.75",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                    (0, a.jsx)("path", {
                                      className: "stroke-white",
                                      d: "M17 7L6.75 17.25",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(n.default, {
                              href: "#",
                              className:
                                "ms-5 text-decoration-underline fw-bold",
                              children: "How We Work",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "position-absolute bottom-0 start-50 translate-middle-x z-0",
                    children: (0, a.jsx)("img", {
                      src: "/assets/imgs/pricing-3/bg-line-2.png",
                      alt: "infinia",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "rotate-center ellipse-rotate-success position-absolute top-50 z-1",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "rotate-center-rev ellipse-rotate-primary position-absolute top-50 z-1",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    21932: function (s, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = i(2265),
        l = a && "object" == typeof a && "default" in a ? a : { default: a };
      !(function (s) {
        if (!s || "undefined" == typeof window) return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
          (e.innerHTML = s),
          document.head.appendChild(e);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let n = a.forwardRef(function (s, e) {
        let {
            style: i = {},
            className: n = "",
            autoFill: t = !1,
            play: r = !0,
            pauseOnHover: c = !1,
            pauseOnClick: m = !1,
            direction: d = "left",
            speed: o = 50,
            delay: h = 0,
            loop: x = 0,
            gradient: g = !1,
            gradientColor: f = "white",
            gradientWidth: p = 200,
            onFinish: j,
            onCycleComplete: u,
            onMount: b,
            children: N,
          } = s,
          [v, y] = a.useState(0),
          [w, k] = a.useState(0),
          [L, P] = a.useState(1),
          [S, z] = a.useState(!1),
          M = a.useRef(null),
          T = e || M,
          E = a.useRef(null),
          C = a.useCallback(() => {
            if (E.current && T.current) {
              let s = T.current.getBoundingClientRect(),
                e = E.current.getBoundingClientRect(),
                i = s.width,
                a = e.width;
              ("up" === d || "down" === d) && ((i = s.height), (a = e.height)),
                t && i && a ? P(a < i ? Math.ceil(i / a) : 1) : P(1),
                y(i),
                k(a);
            }
          }, [t, T, d]);
        a.useEffect(() => {
          if (S && (C(), E.current && T.current)) {
            let s = new ResizeObserver(() => C());
            return (
              s.observe(T.current),
              s.observe(E.current),
              () => {
                s && s.disconnect();
              }
            );
          }
        }, [C, T, S]),
          a.useEffect(() => {
            C();
          }, [C, N]),
          a.useEffect(() => {
            z(!0);
          }, []),
          a.useEffect(() => {
            "function" == typeof b && b();
          }, []);
        let B = a.useMemo(
            () => (t ? (w * L) / o : w < v ? v / o : w / o),
            [t, v, w, L, o]
          ),
          H = a.useMemo(
            () =>
              Object.assign(Object.assign({}, i), {
                "--pause-on-hover": !r || c ? "paused" : "running",
                "--pause-on-click": !r || (c && !m) || m ? "paused" : "running",
                "--width": "up" === d || "down" === d ? "100vh" : "100%",
                "--transform":
                  "up" === d
                    ? "rotate(-90deg)"
                    : "down" === d
                    ? "rotate(90deg)"
                    : "none",
              }),
            [i, r, c, m, d]
          ),
          G = a.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof p ? "".concat(p, "px") : p,
            }),
            [f, p]
          ),
          A = a.useMemo(
            () => ({
              "--play": r ? "running" : "paused",
              "--direction": "left" === d ? "normal" : "reverse",
              "--duration": "".concat(B, "s"),
              "--delay": "".concat(h, "s"),
              "--iteration-count": x ? "".concat(x) : "infinite",
              "--min-width": t ? "auto" : "100%",
            }),
            [r, d, B, h, x, t]
          ),
          _ = a.useMemo(
            () => ({
              "--transform":
                "up" === d
                  ? "rotate(90deg)"
                  : "down" === d
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [d]
          ),
          q = a.useCallback(
            (s) =>
              [...Array(Number.isFinite(s) && s >= 0 ? s : 0)].map((s, e) =>
                l.default.createElement(
                  a.Fragment,
                  { key: e },
                  a.Children.map(N, (s) =>
                    l.default.createElement(
                      "div",
                      { style: _, className: "rfm-child" },
                      s
                    )
                  )
                )
              ),
            [_, N]
          );
        return S
          ? l.default.createElement(
              "div",
              { ref: T, style: H, className: "rfm-marquee-container " + n },
              g &&
                l.default.createElement("div", {
                  style: G,
                  className: "rfm-overlay",
                }),
              l.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: A,
                  onAnimationIteration: u,
                  onAnimationEnd: j,
                },
                l.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: E },
                  a.Children.map(N, (s) =>
                    l.default.createElement(
                      "div",
                      { style: _, className: "rfm-child" },
                      s
                    )
                  )
                ),
                q(L - 1)
              ),
              l.default.createElement(
                "div",
                { className: "rfm-marquee", style: A },
                q(L)
              )
            )
          : null;
      });
      e.default = n;
    },
  },
  function (s) {
    s.O(0, [6704, 486, 7490, 2971, 7023, 1744], function () {
      return s((s.s = 39263));
    }),
      (_N_E = s.O());
  },
]);
