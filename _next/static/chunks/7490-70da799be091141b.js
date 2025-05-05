"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7490],
  {
    87490: function (e, s, a) {
      a.d(s, {
        default: function () {
          return y;
        },
      });
      var i = a(57437),
        l = a(17323),
        t = a.n(l);
      a(73023);
      var r = a(2265);
      function n(e) {
        let { target: s } = e,
          [a, l] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              l(window.scrollY > 100);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, i.jsx)(i.Fragment, {
            children:
              a &&
              (0, i.jsx)("div", {
                className: "btn-scroll-top active-progress",
                onClick: () => {
                  let e = document.querySelector(s);
                  e
                    ? window.scrollTo({ top: e.offsetTop, behavior: "smooth" })
                    : console.error(
                        "Element with target '".concat(s, "' not found")
                      );
                },
                children: (0, i.jsx)("svg", {
                  className: "progress-square svg-content",
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 40 40",
                  children: (0, i.jsx)("path", {
                    d: "M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z",
                  }),
                }),
              }),
          })
        );
      }
      function c(e) {
        let { breadcrumbTitle: s } = e;
        return (0, i.jsx)(i.Fragment, {});
      }
      var d = a(87138);
      function o() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("footer", {
            children: (0, i.jsxs)("div", {
              className: "section-footer position-relative",
              children: [
                (0, i.jsx)("div", {
                  className: "container-fluid bgft-1",
                  children: (0, i.jsxs)("div", {
                    className: "container position-relative z-2",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "row py-90",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "col-lg-4 pe-10",
                            "data-aos": "fade-zoom-in",
                            "data-aos-delay": 100,
                            children: [
                              (0, i.jsx)(d.default, {
                                href: "/",
                                children: (0, i.jsx)("img", {
                                  src: "/assets/imgs/template/logo-no-background.png",
                                  alt: "CodM",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-white fw-medium mt-3 mb-6 opacity-50",
                                children:
                                  "Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and scalable growth – we deliver innovations for your success.",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex social-icons",
                                children: [
                                  (0, i.jsx)(d.default, {
                                    href: "https://www.facebook.com/",
                                    className:
                                      " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 10,
                                      height: 17,
                                      viewBox: "0 0 10 17",
                                      fill: "none",
                                      children: (0, i.jsx)("path", {
                                        d: "M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z",
                                        fill: "white",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "https://twitter.com/",
                                    className:
                                      " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-twitter-x",
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "https://www.linkedin.com/",
                                    className:
                                      " text-white border border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-linkedin",
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "https://www.behance.net/",
                                    className:
                                      " text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-behance",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "col-lg-8",
                            children: (0, i.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 200,
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5",
                                      children: "Company",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Mission  Vision",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Our Team",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Careers",
                                        }),
                                        // (0, i.jsx)(d.default, {
                                        //   className:
                                        //     "hover-effect text-white mb-2 fw-medium fs-6",
                                        //   href: "#",
                                        //   children: "Press  Media",
                                        // }),
                                        // (0, i.jsx)(d.default, {
                                        //   className:
                                        //     "hover-effect text-white mb-2 fw-medium fs-6",
                                        //   href: "#",
                                        //   children: "Advertising",
                                        // }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Testimonials",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 300,
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5",
                                      children: "About Us",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Our Journeys",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Solutions",
                                        }),
                                        // (0, i.jsx)(d.default, {
                                        //   className:
                                        //     "hover-effect text-white mb-2 fw-medium fs-6",
                                        //   href: "#",
                                        //   children: "Customers",
                                        // }),
                                        // (0, i.jsx)(d.default, {
                                        //   className:
                                        //     "hover-effect text-white mb-2 fw-medium fs-6",
                                        //   href: "#",
                                        //   children: "News  Events",
                                        // }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Project management",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "#",
                                          children: "Help Center",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 400,
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5",
                                      children: "Services",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: "Salesforce CRM",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: ".NET Application",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: "React Application",
                                        }),
                                        // (0, i.jsx)(d.default, {
                                        //   className:
                                        //     "hover-effect text-white mb-2 fw-medium fs-6",
                                        //   href: "#",
                                        //   children: "Gantt chart makers",
                                        // }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: "API Integration",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: "D.I./ D.M.",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/Services.html",
                                          children: "Technical Support",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  "data-aos": "fade-zoom-in",
                                  "data-aos-delay": 500,
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5",
                                      children: "Contact",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/contact.html",
                                          children: "Knowledge Base",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/contact.html",
                                          children: "Documents",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/contact.html",
                                          children: "System Status",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/contact.html",
                                          children: "Security",
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
                      (0, i.jsx)("div", {
                        className:
                          "row text-center py-4 border-top border-white border-opacity-10",
                        children: (0, i.jsx)("span", {
                          className: "text-white opacity-50",
                          "data-aos": "fade-zoom-in",
                          "data-aos-delay": 200,
                          children:
                            "Copyright \xa9 2025 CodM. All Rights Reserved",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className:
                    "position-absolute top-0 start-50 translate-middle-x z-0",
                  children: (0, i.jsx)("img", {
                    src: "/assets/imgs/footer-1/line-bg.png",
                    alt: "CodM",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "position-absolute top-0 start-0 z-0",
                  children: (0, i.jsx)("img", {
                    src: "/assets/imgs/footer-1/ellipse-left.png",
                    alt: "CodM",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "position-absolute top-0 end-0 z-0",
                  children: (0, i.jsx)("img", {
                    src: "/assets/imgs/footer-1/ellipse-right.png",
                    alt: "CodM",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function h() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("footer", {
            children: (0, i.jsxs)("div", {
              className: "section-footer",
              children: [
                (0, i.jsx)("div", {
                  className: "container-fluid bg-white",
                  children: (0, i.jsx)("div", {
                    className: " container position-relative z-2",
                    children: (0, i.jsxs)("div", {
                      className: "row py-90",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "col-lg-4 pe-10",
                          children: [
                            (0, i.jsxs)(d.default, {
                              className:
                                "navbar-brand d-flex main-logo align-items-center",
                              href: "/",
                              children: [
                                (0, i.jsx)("img", {
                                  src: "assets/imgs/template/logo-no-background.png",
                                  alt: "CodM",
                                }),
                                (0, i.jsx)("span", { children: "CodM" }),
                              ],
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-900 fw-medium mt-3 mb-6 opacity-50",
                              children:
                                "Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and scalable growth – we deliver innovations for your success.",
                            }),
                            (0, i.jsxs)("div", {
                              className: "d-flex social-icons",
                              children: [
                                (0, i.jsx)(d.default, {
                                  href: "/https://www.facebook.com/",
                                  className:
                                    " text-900 border border-end-0  border-opacity-10 icon-shape icon-md",
                                  children: (0, i.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: 10,
                                    height: 17,
                                    viewBox: "0 0 10 17",
                                    fill: "none",
                                    children: (0, i.jsx)("path", {
                                      className: "fill-dark",
                                      d: "M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z",
                                      fill: "black",
                                    }),
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/https://twitter.com/",
                                  className:
                                    " text-900 border border-end-0    border-opacity-10 icon-shape icon-md",
                                  children: (0, i.jsx)("i", {
                                    className: "bi bi-twitter-x",
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/https://www.linkedin.com/",
                                  className:
                                    " text-900 border    border-opacity-10 icon-shape icon-md",
                                  children: (0, i.jsx)("i", {
                                    className: "bi bi-linkedin",
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/https://www.behance.net/",
                                  className:
                                    " text-900 border border-start-0    border-opacity-10 icon-shape icon-md",
                                  children: (0, i.jsx)("i", {
                                    className: "bi bi-behance",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, i.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-900 fs-6 fw-black text-uppercase pb-3 pt-5",
                                    children: "Company",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Mission & Vision",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Our Team",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Careers",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Press & Media",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Advertising",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Testimonials",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-900 fs-6 fw-black text-uppercase pb-3 pt-5",
                                    children: "Resource",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Knowledge Base",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Documents",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "System Status",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-900 mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Security",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "col-lg-6 col-md-3",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-900 fs-6 fw-black text-uppercase pb-3 pt-5",
                                    children: "instagram posts",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "d-flex",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-1.png",
                                          alt: "CodM",
                                        }),
                                      }),
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-2.png",
                                          alt: "CodM",
                                        }),
                                      }),
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-3.png",
                                          alt: "CodM",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "d-flex mt-2",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-4.png",
                                          alt: "CodM",
                                        }),
                                      }),
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-5.png",
                                          alt: "CodM",
                                        }),
                                      }),
                                      (0, i.jsx)(d.default, {
                                        href: "/http://instagram.com/username",
                                        className: "me-2 hover-up",
                                        children: (0, i.jsx)("img", {
                                          className: "rounded-3",
                                          src: "assets/imgs/footer-3/img-inst-6.png",
                                          alt: "CodM",
                                        }),
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
                }),
                (0, i.jsx)("div", {
                  className: "container-fluid bg-primary-soft",
                  children: (0, i.jsx)("div", {
                    className: "container",
                    children: (0, i.jsx)("div", {
                      className: "row",
                      children: (0, i.jsxs)("div", {
                        className:
                          "d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 py-4 border-top border-white border-opacity-10",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-900 opacity-50 mb-0 fs-7",
                            children:
                              "Copyright \xa9 2025 CodM. All Rights Reserved",
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex",
                            children: [
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className: "text-900 me-3",
                                children: " Privacy policy ",
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className: "text-900 me-3",
                                children: " Cookies ",
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className: "text-900 me-3",
                                children: " Terms of service ",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function m() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("footer", {
            children: (0, i.jsx)("div", {
              className: "section-footer",
              children: (0, i.jsx)("div", {
                className: "container-fluid bgft-1",
                children: (0, i.jsxs)("div", {
                  className: " container position-relative z-2",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "d-flex py-4 border-bottom border-white border-opacity-10 justify-content-between align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          children: (0, i.jsx)(d.default, {
                            href: "/",
                            children: (0, i.jsx)("img", {
                              src: "assets/imgs/logo/logo-white.svg",
                              alt: "CodM",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          children: (0, i.jsxs)("div", {
                            className: "d-flex social-icons",
                            children: [
                              (0, i.jsx)(d.default, {
                                href: "/https://www.facebook.com/",
                                className:
                                  " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                children: (0, i.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 10,
                                  height: 17,
                                  viewBox: "0 0 10 17",
                                  fill: "none",
                                  children: (0, i.jsx)("path", {
                                    d: "M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z",
                                    fill: "white",
                                  }),
                                }),
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/https://twitter.com/",
                                className:
                                  " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                children: (0, i.jsx)("i", {
                                  className: "bi bi-twitter-x",
                                }),
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/https://www.linkedin.com/",
                                className:
                                  " text-white border border-light border-opacity-10 icon-shape icon-md",
                                children: (0, i.jsx)("i", {
                                  className: "bi bi-linkedin",
                                }),
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/https://www.behance.net/",
                                className:
                                  " text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md",
                                children: (0, i.jsx)("i", {
                                  className: "bi bi-behance",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "row py-90",
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-lg-8",
                          children: (0, i.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-4 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                    children: "Company",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Mission & Vision",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Our Team",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Careers",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Press & Media",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Advertising",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Testimonials",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-4 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                    children: "About Us",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Our Journeys",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Solutions",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Customers",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "News & Events",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Project management",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Help Center",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-4 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                    children: "Services",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/Services.html",
                                        children: "Salesforce CRM",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/Services.html",
                                        children: ".NET Application",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/Services.html",
                                        children: "API Integration",
                                      }),
                                      // (0, i.jsx)(d.default, {
                                      //   className:
                                      //     "hover-effect text-white mb-2 fw-medium fs-6",
                                      //   href: "/#",
                                      //   children: "Gantt chart makers",
                                      // }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/Services.html",
                                        children: "Data Integration / Migration",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/Services.html",
                                        children: "Technical Support",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("div", {
                                className: "col-lg-3 col-md-4 col-6",
                                children: [
                                  (0, i.jsx)("h3", {
                                    className:
                                      "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                    children: "Resource",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "d-flex flex-column align-items-start",
                                    children: [
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Knowledge Base",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Documents",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "System Status",
                                      }),
                                      (0, i.jsx)(d.default, {
                                        className:
                                          "hover-effect text-white mb-2 fw-medium fs-6",
                                        href: "/#",
                                        children: "Security",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "col-lg-3 pt-5 pt-lg-0",
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "text-white fw-black opacity-50 text-uppercase",
                              children: "App & Payment",
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "text-white fw-medium mt-3 mb-4 opacity-50",
                              children:
                                "Download our Apps and get extra 15% discount on your first order…!",
                            }),
                            (0, i.jsxs)("div", {
                              className: "d-flex gap-2",
                              children: [
                                (0, i.jsx)(d.default, {
                                  href: "/#",
                                  children: (0, i.jsx)("img", {
                                    className: "mb-2",
                                    src: "assets/imgs/footer-4/app-payment-1.png",
                                    alt: "App Store",
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/#",
                                  children: (0, i.jsx)("img", {
                                    className: "mb-2",
                                    src: "assets/imgs/footer-4/app-payment-2.png",
                                    alt: "Google Play",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "d-flex gap-2",
                              children: [
                                (0, i.jsx)(d.default, {
                                  href: "/#",
                                  children: (0, i.jsx)("img", {
                                    className: "mb-2",
                                    src: "assets/imgs/footer-4/app-payment-3.png",
                                    alt: "Microsoft",
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/#",
                                  children: (0, i.jsx)("img", {
                                    className: "mb-2",
                                    src: "assets/imgs/footer-4/app-payment-4.png",
                                    alt: "Amazon",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", { className: "col-1" }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "row",
                      children: (0, i.jsxs)("div", {
                        className:
                          "d-flex flex-md-row flex-column align-items-center justify-content-between bg-transparent py-4 border-top border-opacity-10",
                        children: [
                          (0, i.jsx)("span", {
                            className: "text-white opacity-50 mb-3 mb-md-0",
                            children:
                              "Copyright \xa9 2025 CodM. All Rights Reserved",
                          }),
                          (0, i.jsxs)("div", {
                            className: "d-flex",
                            children: [
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className:
                                  "link-hover-primary-light text-white me-3",
                                children: "Privacy policy",
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className:
                                  "link-hover-primary-light text-white me-3",
                                children: "Cookies",
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className:
                                  "link-hover-primary-light text-white me-3",
                                children: "Terms of service",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function f() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            children: [
              (0, i.jsxs)("div", {
                className: " position-relative d-none d-md-flex",
                children: [
                  (0, i.jsx)("div", { className: "col-6 bg-primary py-md-6" }),
                  (0, i.jsx)("div", {
                    className: "col-6 bg-primary-dark py-md-6",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "container position-absolute top-50 start-50 translate-middle",
                    children: (0, i.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "col-6 d-lg-flex gap-5",
                          children: [
                            (0, i.jsxs)(d.default, {
                              href: "/#",
                              className: "d-flex mb-lg-0 mb-2",
                              children: [
                                (0, i.jsxs)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 24,
                                  height: 24,
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  children: [
                                    (0, i.jsx)("path", {
                                      d: "M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z",
                                      stroke: "white",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("p", {
                                  className: "text-white mb-0 ms-2",
                                  children: "0811 Erdman Prairie, Joaville CA",
                                }),
                              ],
                            }),
                            (0, i.jsxs)(d.default, {
                              href: "/#",
                              className: "d-flex",
                              children: [
                                (0, i.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: 24,
                                  height: 24,
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  children: (0, i.jsx)("path", {
                                    d: "M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z",
                                    stroke: "white",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                                (0, i.jsx)("p", {
                                  className: "text-white mb-0 ms-2",
                                  children: "+01 (24) 568 900",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "col-6",
                          children: (0, i.jsxs)("div", {
                            className: "d-flex ms-md-5",
                            children: [
                              (0, i.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 24,
                                height: 24,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, i.jsx)("path", {
                                  d: "M13 16H12V12H11M12 8H12.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z",
                                  stroke: "white",
                                  strokeWidth: 2,
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className: "text-white mb-0 ms-2",
                                children:
                                  "Our website uses cookies to improve your experience.",
                              }),
                              (0, i.jsx)(d.default, {
                                href: "/#",
                                className:
                                  "text-white ms-2 link-hover-primary-light",
                                children: " Learn more ",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "section-footer",
                children: (0, i.jsx)("div", {
                  className: "container-fluid bg-6",
                  children: (0, i.jsxs)("div", {
                    className: "container position-relative z-2",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "row py-90",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "col-lg-4 pe-10",
                            children: [
                              (0, i.jsx)(d.default, {
                                href: "/",
                                children: (0, i.jsx)("img", {
                                  src: "assets/imgs/template/logo-no-background.png",
                                  alt: "CodM",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-white fw-medium mt-3 mb-6 opacity-50",
                                children:
                                  "Boost your business with our customised CRM solutions. Optimised processes, improved customer relationships and scalable growth – we deliver innovations for your success.",
                              }),
                              (0, i.jsxs)("div", {
                                className: "d-flex social-icons",
                                children: [
                                  (0, i.jsx)(d.default, {
                                    href: "/https://www.facebook.com/",
                                    className:
                                      " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: 10,
                                      height: 17,
                                      viewBox: "0 0 10 17",
                                      fill: "none",
                                      children: (0, i.jsx)("path", {
                                        d: "M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z",
                                        fill: "white",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "/https://twitter.com/",
                                    className:
                                      " text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-twitter-x",
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "/https://www.linkedin.com/",
                                    className:
                                      " text-white border border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-linkedin",
                                    }),
                                  }),
                                  (0, i.jsx)(d.default, {
                                    href: "/https://www.behance.net/",
                                    className:
                                      " text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md",
                                    children: (0, i.jsx)("i", {
                                      className: "bi bi-behance",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "col-lg-8",
                            children: (0, i.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                      children: "Services",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Project software",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Resource software",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Workflow",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Gantt chart makers",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Project dashboards",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Task software",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "col-lg-3 col-md-4 col-6",
                                  children: [
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5 pt-lg-0",
                                      children: "Resource",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className:
                                        "d-flex flex-column align-items-start",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Knowledge Base",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Documents",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "System Status",
                                        }),
                                        (0, i.jsx)(d.default, {
                                          className:
                                            "hover-effect text-white mb-2 fw-medium fs-6",
                                          href: "/#",
                                          children: "Security",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: "col-lg-6 pt-5 pt-lg-0",
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-white fw-black opacity-50 text-uppercase",
                                      children: "App & Payment",
                                    }),
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-white fw-medium mt-3 mb-4 opacity-50",
                                      children:
                                        "Download our Apps and get extra 15% discount on your first order…!",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "d-flex gap-2",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          href: "/#",
                                          children: (0, i.jsx)("img", {
                                            className: "mb-2",
                                            src: "assets/imgs/footer-4/app-payment-1.png",
                                            alt: "App Store",
                                          }),
                                        }),
                                        (0, i.jsx)(d.default, {
                                          href: "/#",
                                          children: (0, i.jsx)("img", {
                                            className: "mb-2",
                                            src: "assets/imgs/footer-4/app-payment-2.png",
                                            alt: "Google Play",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "d-flex gap-2",
                                      children: [
                                        (0, i.jsx)(d.default, {
                                          href: "/#",
                                          children: (0, i.jsx)("img", {
                                            className: "mb-2",
                                            src: "assets/imgs/footer-4/app-payment-3.png",
                                            alt: "Microsoft",
                                          }),
                                        }),
                                        (0, i.jsx)(d.default, {
                                          href: "/#",
                                          children: (0, i.jsx)("img", {
                                            className: "mb-2",
                                            src: "assets/imgs/footer-4/app-payment-4.png",
                                            alt: "Amazon",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("div", { className: "col-1" }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "row text-center py-4 border-top border-white border-opacity-10",
                        children: (0, i.jsx)("span", {
                          className: "text-white opacity-50",
                          children:
                            "Copyright \xa9 2025 CodM. All Rights Reserved",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function x(e) {
        let { isMobileMenu: s, handleMobileMenu: a } = e,
          [l, t] = (0, r.useState)(0),
          n = (e) => {
            t((s) => (s === e ? null : e));
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className:
              "mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ".concat(
                s ? "sidebar-visible" : ""
              ),
            children: (0, i.jsxs)("div", {
              className: "mobile-header-wrapper-inner",
              children: [
                (0, i.jsxs)("div", {
                  className: "mobile-header-logo",
                  children: [
                    (0, i.jsxs)(d.default, {
                      className:
                        "navbar-brand d-flex main-logo align-items-center",
                      href: "/",
                      children: [
                        (0, i.jsx)("img", {
                          src: "/assets/imgs/template/logo-no-background.png",
                          alt: "CodM",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "burger-icon burger-icon-white border rounded-3 ".concat(
                          s ? "burger-close" : ""
                        ),
                      onClick: a,
                      children: [
                        (0, i.jsx)("span", { className: "burger-icon-top" }),
                        (0, i.jsx)("span", { className: "burger-icon-mid" }),
                        (0, i.jsx)("span", { className: "burger-icon-bottom" }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "mobile-header-content-area",
                  children: (0, i.jsx)("div", {
                    className: "perfect-scroll",
                    children: (0, i.jsx)("div", {
                      className: "mobile-menu-wrap mobile-header-border",
                      children: (0, i.jsx)("nav", {
                        children: (0, i.jsxs)("ul", {
                          className: "mobile-menu font-heading ps-0",
                          children: [
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                1 === l ? "active" : ""
                              ),
                              children: [
                                // (0, i.jsx)("span", {
                                //   className: "menu-expand",
                                //   onClick: () => n(1),
                                //   children: (0, i.jsx)("i", {
                                //     className: "arrow-small-down",
                                //   }),
                                // }),
                                (0, i.jsx)(d.default, {
                                  className: "active",
                                  href: "/index.html",
                                  children: "Home",
                                }),
                                // (0, i.jsxs)("ul", {
                                //   className: "sub-menu",
                                //   style: {
                                //     display: "".concat(
                                //       1 == l ? "block" : "none"
                                //     ),
                                //   },
                                // }),
                              ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                2 === l ? "active" : ""
                              ),
                              children: [
                                // (0, i.jsx)("span", {
                                //   className: "menu-expand",
                                //   onClick: () => n(2),
                                //   children: (0, i.jsx)("i", {
                                //     className: "arrow-small-down",
                                //   }),
                                // }),
                                (0, i.jsx)(d.default, {
                                  href: "/AboutUs.html",
                                  children: "About Us",
                                }),
                                // (0, i.jsxs)("ul", {
                                //   className: "sub-menu",
                                //   style: {
                                //     display: "".concat(
                                //       2 == l ? "block" : "none"
                                //     ),
                                //   },
                                //   children: [
                                //     (0, i.jsx)("li", {
                                //       children: (0, i.jsx)(d.default, {
                                //         href: "/!#",
                                //         children: "About us",
                                //       }),
                                //     }),
                                //     // (0, i.jsx)("li", {
                                //     //   children: (0, i.jsx)(d.default, {
                                //     //     href: "/!#",
                                //     //     children: "About us v.2",
                                //     //   }),
                                //     // }),
                                //     // (0, i.jsx)("li", {
                                //     //   children: (0, i.jsx)(d.default, {
                                //     //     href: "/!#",
                                //     //     children: "About us v.3",
                                //     //   }),
                                //     // }),
                                //   ],
                                // }),
                              ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                3 === l ? "active" : ""
                              ),
                              children: [
                                (0, i.jsx)("span", {
                                  className: "menu-expand",
                                  onClick: () => n(3),
                                  children: (0, i.jsx)("i", {
                                    className: "arrow-small-down",
                                  }),
                                }),
                                (0, i.jsx)(d.default, {
                                  href: "/Services.html",
                                  children: "Services",
                                }),
                                (0, i.jsxs)("ul", {
                                  className: "sub-menu",
                                  style: {
                                    display: "".concat(
                                      3 == l ? "block" : "none"
                                    ),
                                  },
                                  children: [
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(d.default, {
                                        href: "/Services.html",
                                        children: "Services ",
                                      }),
                                    }),
                                    // (0, i.jsx)("li", {
                                    //   children: (0, i.jsx)(d.default, {
                                    //     href: "/!#",
                                    //     children: "Services v.2",
                                    //   }),
                                    // }),
                                    // (0, i.jsx)("li", {
                                    //   children: (0, i.jsx)(d.default, {
                                    //     href: "/!#",
                                    //     children: "Services v.3",
                                    //   }),
                                    // }),
                                    // (0, i.jsx)("li", {
                                    //   children: (0, i.jsx)(d.default, {
                                    //     href: "/!#",
                                    //     children: "Services details v.1",
                                    //   }),
                                    // }),
                                    // (0, i.jsx)("li", {
                                    //   children: (0, i.jsx)(d.default, {
                                    //     href: "/!#",
                                    //     children: "Services details v.2",
                                    //   }),
                                    // }),
                                  ],
                                }),
                              ],
                            }),
                            // (0, i.jsxs)("li", {
                            //   className: "has-children ".concat(
                            //     4 === l ? "active" : ""
                            //   ),
                            //   children: [
                            //     (0, i.jsx)("span", {
                            //       className: "menu-expand",
                            //       onClick: () => n(4),
                            //       children: (0, i.jsx)("i", {
                            //         className: "arrow-small-down",
                            //       }),
                            //     }),
                            //     (0, i.jsx)(d.default, {
                            //       href: "!#",
                            //       children: "Our Team",
                            //     }),
                            //     (0, i.jsxs)("ul", {
                            //       className: "sub-menu",
                            //       style: {
                            //         display: "".concat(
                            //           4 == l ? "block" : "none"
                            //         ),
                            //       },
                            //       children: [
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/!#",
                            //             children: "Our team ",
                            //           }),
                            //         }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Our team v.2",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Our team v.3",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Our team v.4",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Our team v.5",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Our team v.6",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Team detail v.1",
                            //         //   }),
                            //         // }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Team detail v.2",
                            //         //   }),
                            //         // }),
                            //       ],
                            //     }),
                            //   ],
                            // }),
                            // (0, i.jsxs)("li", {
                            //   className: "has-children ".concat(
                            //     5 === l ? "active" : ""
                            //   ),
                            //   children: [
                            //     (0, i.jsx)("span", {
                            //       className: "menu-expand",
                            //       onClick: () => n(5),
                            //       children: (0, i.jsx)("i", {
                            //         className: "arrow-small-down",
                            //       }),
                            //     }),
                            //     (0, i.jsx)(d.default, {
                            //       href: "!#",
                            //       children: "Features",
                            //     }),
                            //     (0, i.jsxs)("ul", {
                            //       className: "sub-menu",
                            //       style: {
                            //         display: "".concat(
                            //           5 == l ? "block" : "none"
                            //         ),
                            //       },
                            //       children: [
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/!#",
                            //             children: "Features v.1",
                            //           }),
                            //         }),
                            //         // (0, i.jsx)("li", {
                            //         //   children: (0, i.jsx)(d.default, {
                            //         //     href: "/!#",
                            //         //     children: "Features v.2",
                            //         //   }),
                            //         // }),
                            //       ],
                            //     }),
                            //   ],
                            // }),
                            // (0, i.jsxs)("li", {
                            //   className: "has-children ".concat(
                            //     6 === l ? "active" : ""
                            //   ),
                            //   children: [
                            //     (0, i.jsx)("span", {
                            //       className: "menu-expand",
                            //       onClick: () => n(6),
                            //       children: (0, i.jsx)("i", {
                            //         className: "arrow-small-down",
                            //       }),
                            //     }),
                            //     (0, i.jsx)(d.default, {
                            //       href: "!#",
                            //       children: "Pricing",
                            //     }),
                            //     (0, i.jsxs)("ul", {
                            //       className: "sub-menu",
                            //       style: {
                            //         display: "".concat(
                            //           6 == l ? "block" : "none"
                            //         ),
                            //       },
                            //       children: [
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/!#",
                            //             children: "Pricing v.1",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/!#",
                            //             children: "Pricing v.2",
                            //           }),
                            //         }),
                            //       ],
                            //     }),
                            //   ],
                            // }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                7 === l ? "active" : ""
                              ),
                              children: [
                                // (0, i.jsx)("span", {
                                //   className: "menu-expand",
                                //   onClick: () => n(7),
                                //   children: (0, i.jsx)("i", {
                                //     className: "arrow-small-down",
                                //   }),
                                // }),
                                (0, i.jsx)(d.default, {
                                  href: "/contact.html",
                                  children: "Contact Us",
                                }),
                                // (0, i.jsxs)("ul", {
                                //   className: "sub-menu",
                                //   style: {
                                //     display: "".concat(
                                //       7 == l ? "block" : "none"
                                //     ),
                                //   },
                                //   children: [
                                //     (0, i.jsx)("li", {
                                //       children: (0, i.jsx)(d.default, {
                                //         href: "/!#",
                                //         children: "Contact v.1",
                                //       }),
                                //     }),
                                //     // (0, i.jsx)("li", {
                                //     //   children: (0, i.jsx)(d.default, {
                                //     //     href: "/!#",
                                //     //     children: "Contact v.2",
                                //     //   }),
                                //     // }),
                                //     // (0, i.jsx)("li", {
                                //     //   children: (0, i.jsx)(d.default, {
                                //     //     href: "/!#",
                                //     //     children: "Contact v.3",
                                //     //   }),
                                //     // }),
                                //   ],
                                // }),
                              ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                8 === l ? "active" : ""
                              ),
                              // children: [
                              //   (0, i.jsx)("span", {
                              //     className: "menu-expand",
                              //     onClick: () => n(8),
                              //     children: (0, i.jsx)("i", {
                              //       className: "arrow-small-down",
                              //     }),
                              //   }),
                              //   (0, i.jsx)(d.default, {
                              //     href: "#",
                              //     children: "Blog  News",
                              //   }),
                              //   (0, i.jsxs)("ul", {
                              //     className: "sub-menu",
                              //     style: {
                              //       display: "".concat(
                              //         8 == l ? "block" : "none"
                              //       ),
                              //     },
                              //     children: [
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/!#",
                              //           children: "Blog v.1",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/!#",
                              //           children: "Blog v.2",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-blog-details",
                              //           children: "Blog details",
                              //         }),
                              //       }),
                              //     ],
                              //   }),
                              // ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                9 === l ? "active" : ""
                              ),
                              // children: [
                              //   (0, i.jsx)("span", {
                              //     className: "menu-expand",
                              //     onClick: () => n(9),
                              //     children: (0, i.jsx)("i", {
                              //       className: "arrow-small-down",
                              //     }),
                              //   }),
                              //   (0, i.jsx)(d.default, {
                              //     href: "#",
                              //     children: "Case Study",
                              //   }),
                              //   (0, i.jsxs)("ul", {
                              //     className: "sub-menu",
                              //     style: {
                              //       display: "".concat(
                              //         9 == l ? "block" : "none"
                              //       ),
                              //     },
                              //     children: [
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-case-study",
                              //           children: "Case Study",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-case-study-details",
                              //           children: "Case study details",
                              //         }),
                              //       }),
                              //     ],
                              //   }),
                              // ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                10 === l ? "active" : ""
                              ),
                              // children: [
                              //   (0, i.jsx)("span", {
                              //     className: "menu-expand",
                              //     onClick: () => n(10),
                              //     children: (0, i.jsx)("i", {
                              //       className: "arrow-small-down",
                              //     }),
                              //   }),
                              //   (0, i.jsx)(d.default, {
                              //     href: "#",
                              //     children: "Authentication",
                              //   }),
                              //   (0, i.jsxs)("ul", {
                              //     className: "sub-menu",
                              //     style: {
                              //       display: "".concat(
                              //         10 == l ? "block" : "none"
                              //       ),
                              //     },
                              //     children: [
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-register",
                              //           children: "Register",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-login",
                              //           children: "Sign in",
                              //         }),
                              //       }),
                              //     ],
                              //   }),
                              // ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                11 === l ? "active" : ""
                              ),
                              // children: [
                              //   (0, i.jsx)("span", {
                              //     className: "menu-expand",
                              //     onClick: () => n(11),
                              //     children: (0, i.jsx)("i", {
                              //       className: "arrow-small-down",
                              //     }),
                              //   }),
                              //   (0, i.jsx)(d.default, {
                              //     href: "#",
                              //     children: "Utilities",
                              //   }),
                              //   (0, i.jsxs)("ul", {
                              //     className: "sub-menu",
                              //     style: {
                              //       display: "".concat(
                              //         11 == l ? "block" : "none"
                              //       ),
                              //     },
                              //     children: [
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-work-process",
                              //           children: "Work Process",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-book-a-demo",
                              //           children: "Book a demo",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-integration",
                              //           children: "Integration",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-changelog",
                              //           children: "Change log",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-privacy-policy",
                              //           children: "Privacy policy",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-terms-conditions",
                              //           children: "Terms conditions",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-comming-soon",
                              //           children: "Comming soon",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-404",
                              //           children: "Error 404",
                              //         }),
                              //       }),
                              //     ],
                              //   }),
                              // ],
                            }),
                            (0, i.jsxs)("li", {
                              className: "has-children ".concat(
                                12 === l ? "active" : ""
                              ),
                              // children: [
                              //   (0, i.jsx)("span", {
                              //     className: "menu-expand",
                              //     onClick: () => n(12),
                              //     children: (0, i.jsx)("i", {
                              //       className: "arrow-small-down",
                              //     }),
                              //   }),
                              //   (0, i.jsx)(d.default, {
                              //     href: "#",
                              //     children: "Style Guide",
                              //   }),
                              //   (0, i.jsxs)("ul", {
                              //     className: "sub-menu",
                              //     style: {
                              //       display: "".concat(
                              //         12 == l ? "block" : "none"
                              //       ),
                              //     },
                              //     children: [
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-style-guide",
                              //           children: "Color  Typography",
                              //         }),
                              //       }),
                              //       (0, i.jsx)("li", {
                              //         children: (0, i.jsx)(d.default, {
                              //           href: "/page-elements",
                              //           children: "Basic elements",
                              //         }),
                              //       }),
                              //     ],
                              //   }),
                              // ],
                            }),
                            // (0, i.jsxs)("li", {
                            //   className: "has-children ".concat(
                            //     13 === l ? "active" : ""
                            //   ),
                            //   children: [
                            //     (0, i.jsx)("span", {
                            //       className: "menu-expand",
                            //       onClick: () => n(13),
                            //       children: (0, i.jsx)("i", {
                            //         className: "arrow-small-down",
                            //       }),
                            //     }),
                            //     (0, i.jsx)(d.default, {
                            //       href: "#",
                            //       children: "All Sections",
                            //     }),
                            //     (0, i.jsxs)("ul", {
                            //       className: "sub-menu",
                            //       style: {
                            //         display: "".concat(
                            //           13 == l ? "block" : "none"
                            //         ),
                            //       },
                            //       children: [
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-navigation",
                            //             children: " Navigation ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-hero",
                            //             children: " Hero ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-logo-cloud",
                            //             children: " Logo cloud ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-cta",
                            //             children: " Call to action ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-how-it-work",
                            //             children: " How it work ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-services",
                            //             children: " Services ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-team",
                            //             children: " Team ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-pricing",
                            //             children: " Pricing ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-faqs",
                            //             children: " FAQS ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-testimonial",
                            //             children: " Testimonials ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-blog",
                            //             children: " Blog ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-newsletter",
                            //             children: " Newsletter ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-footer",
                            //             children: " Footer ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-features",
                            //             children: " Features ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-projects",
                            //             children: " Projects ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-contact",
                            //             children: " Contact ",
                            //           }),
                            //         }),
                            //         (0, i.jsx)("li", {
                            //           children: (0, i.jsx)(d.default, {
                            //             href: "/section-static",
                            //             children: " Static ",
                            //           }),
                            //         }),
                            //       ],
                            //     }),
                            //   ],
                            // }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function j(e) {
        let { isSearch: s, handleSearch: a } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            className: "offcanvas offcanvas-top offcanvasTop h-50 ".concat(
              s ? "show" : ""
            ),
            tabIndex: -1,
            children: [
              (0, i.jsx)("div", {
                className: "offcanvas-header",
                children: (0, i.jsx)("button", {
                  className: "",
                  onClick: a,
                }),
              }),
              (0, i.jsx)("div", {
                className: "offcanvas-body",
                // children: (0, i.jsx)("div", {
                //   className: "container",
                //   children: (0, i.jsx)("div", {
                //     className: "row py-md-5 py-2",
                //     children: (0, i.jsxs)("div", {
                //       className: "",
                //       children: [
                //         (0, i.jsx)("h4", {
                //           className: "",
                //           children: "",
                //         }),
                //         (0, i.jsx)("p", {
                //           className: "text-500 fs-6 mb-5",
                //           children:
                //             "Explore our services and discover how we can help you achieve your goals",
                //         }),
                //         (0, i.jsxs)("div", {
                //           className: "input-group",
                //           "data-aos": "zoom-in",
                //           children: [
                //             (0, i.jsx)("input", {
                //               type: "text",
                //               className: "form-control ps-5 rounded-start-pill",
                //               name: "name",
                //               placeholder: "Enter Your Keywords",
                //             }),
                //             (0, i.jsx)("button", {
                //               className: "btn btn-primary rounded-end-pill",
                //               children: (0, i.jsx)("svg", {
                //                 xmlns: "http://www.w3.org/2000/svg",
                //                 width: 24,
                //                 height: 24,
                //                 viewBox: "0 0 24 24",
                //                 fill: "none",
                //                 children: (0, i.jsx)("path", {
                //                   d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                //                   stroke: "white",
                //                   strokeWidth: "1.5",
                //                   strokeLinecap: "round",
                //                   strokeLinejoin: "round",
                //                 }),
                //               }),
                //             }),
                //           ],
                //         }),
                //         (0, i.jsxs)("div", {
                //           className: "d-flex flex-column flex-lg-row mt-5",
                //           children: [
                //             (0, i.jsx)("h6", {
                //               className: "d-inline me-2",
                //               children: "Suggest:",
                //             }),
                //             (0, i.jsxs)("div", {
                //               className: "d-flex flex-wrap gap-2",
                //               children: [
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "Startup",
                //                 }),
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "Agency",
                //                 }),
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "Creative",
                //                 }),
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "Consulting",
                //                 }),
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "IT services",
                //                 }),
                //                 (0, i.jsx)(d.default, {
                //                   href: "#",
                //                   children: "Pricing",
                //                 }),
                //               ],
                //             }),
                //           ],
                //         }),
                //       ],
                //     }),
                //   }),
                // }),
              }),
            ],
          }),
        });
      }
      function p(e) {
        let { isOffCanvas: s, handleOffCanvas: a } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: "offCanvas__info ".concat(s ? "active" : ""),
              children: [
                (0, i.jsx)("div", {
                  className: "offCanvas__close-icon menu-close",
                  children: (0, i.jsx)("button", {
                    onClick: a,
                    children: (0, i.jsx)("i", {
                      className: "far fa-window-close",
                    }),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "offCanvas__logo mb-30",
                  children: (0, i.jsx)(d.default, {
                    href: "/",
                    children: (0, i.jsx)("img", {
                      src: "/assets/imgs/logo/logo-dark.svg",
                      alt: "Logo",
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "offCanvas__side-info mb-30",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "contact-list mb-30",
                      children: [
                        (0, i.jsx)("h4", { children: "Chat with us" }),
                        (0, i.jsxs)("p", {
                          className: "mb-3",
                          children: [
                            "The support team is always",
                            (0, i.jsx)("br", {}),
                            "available 24/7",
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "d-flex mb-2",
                          children: [
                            (0, i.jsx)("img", {
                              src: "/assets/imgs/contact-2/icon-1.svg",
                              alt: "CodM",
                            }),
                            (0, i.jsx)(d.default, {
                              className:
                                "ms-2 text-decoration-underline text-900 fs-7",
                              href: "#",
                              children: "Chat via Whatsapp",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "d-flex mb-2",
                          children: [
                            (0, i.jsx)("img", {
                              src: "/assets/imgs/contact-2/icon-2.svg",
                              alt: "CodM",
                            }),
                            (0, i.jsx)(d.default, {
                              className:
                                "ms-2 text-decoration-underline text-900 fs-7",
                              href: "#",
                              children: "Chat via Viber",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "d-flex mb-2 mb-5",
                          children: [
                            (0, i.jsx)("img", {
                              src: "/assets/imgs/contact-2/icon-3.svg",
                              alt: "CodM",
                            }),
                            (0, i.jsx)(d.default, {
                              className:
                                "ms-2 text-decoration-underline text-900 fs-7",
                              href: "#",
                              children: "Chat via Messager",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "contact-list mb-30",
                      children: [
                        (0, i.jsx)("h4", { children: "Office Address" }),
                        (0, i.jsxs)("p", {
                          children: [
                            "123/A, Miranda City Likaoli ",
                            (0, i.jsx)("br", {}),
                            "Prikano, Dope",
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "contact-list mb-30",
                      children: [
                        (0, i.jsx)("h4", { children: "Phone Number" }),
                        (0, i.jsx)("p", { children: "(+44) 0121 818 6924" }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "contact-list mb-30",
                      children: [
                        (0, i.jsx)("h4", { children: "Business Emails" }),
                        (0, i.jsx)("p", {
                          children: (0, i.jsx)(d.default, {
                            href: "/mailto:contact@alithemes.com",
                            children: "contact@alithemes.com",
                          }),
                        }),
                        (0, i.jsx)("p", {
                          children: (0, i.jsx)(d.default, {
                            href: "/mailto:sale@alithemes.com ",
                            children: "sale@alithemes.com ",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "contact-list mb-30",
                      children: [
                        (0, i.jsx)("h4", { children: "Help  support" }),
                        (0, i.jsxs)("p", {
                          children: [
                            "Email ",
                            (0, i.jsx)(d.default, {
                              href: "/mailto:hr@codmsoftware.com",
                              children: "hr@codmsoftware.com",
                            }),
                            " For help with a current product or service or refer to FAQs and developer tools.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "offCanvas__social-icon mt-30",
                  children: [
                    (0, i.jsx)(d.default, {
                      href: "/javascript:void(0)",
                      children: (0, i.jsx)("i", {
                        className: "fab fa-facebook-f",
                      }),
                    }),
                    (0, i.jsx)(d.default, {
                      href: "/javascript:void(0)",
                      children: (0, i.jsx)("i", {
                        className: "fab fa-twitter",
                      }),
                    }),
                    (0, i.jsx)(d.default, {
                      href: "/javascript:void(0)",
                      children: (0, i.jsx)("i", {
                        className: "fab fa-google-plus-g",
                      }),
                    }),
                    (0, i.jsx)(d.default, {
                      href: "/javascript:void(0)",
                      children: (0, i.jsx)("i", {
                        className: "fab fa-instagram",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "offCanvas__overly ".concat(s ? "active" : ""),
              onClick: a,
            }),
          ],
        });
      }
      function u() {
        let [e, s] = (0, r.useState)("light");
        return (
          (0, r.useEffect)(() => {
            var e;
            let a =
              (null === (e = localStorage) || void 0 === e
                ? void 0
                : e.getItem("theme")) || "light";
            s(a), document.documentElement.setAttribute("data-bs-theme", a);
          }, []),
          (0, r.useEffect)(() => {
            localStorage.setItem("theme", e),
              document.documentElement.setAttribute("data-bs-theme", e);
          }, [e]),
          (0, i.jsx)("div", {
            className:
              "dark-light-switcher d-flex justify-content-center align-items-center icon-shape icon-md border bg-white rounded-3 ms-3 me-md-3 me-0",
            onClick: () => {
              s((e) => ("light" === e ? "dark" : "light"));
            },
            style: { cursor: "pointer" },
            children: (0, i.jsx)("i", {
              className: "bi theme-icon ".concat(
                "light" === e ? "bi-moon-stars-fill" : "bi-sun-fill"
              ),
            }),
          })
        );
      }
      function g() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("div", {
            className: "d-none d-lg-flex",
            children: (0, i.jsxs)("ul", {
              className: "navbar-nav mx-auto gap-4 align-items-lg-center",
              children: [
                (0, i.jsxs)("li", {
                  className: "nav-item",
                  children: [
                    (0, i.jsx)(d.default, {
                      className: "nav-link fw-bold d-flex align-items-center",
                      href: "index.html",
                      role: "button",
                      children: "Home",
                    }),
                  ],
                }),
                (0, i.jsxs)("li", {
                  className: "nav-item dropdown has-mega",
                  children: [
                    (0, i.jsx)(d.default, {
                      className: "nav-link fw-bold d-flex align-items-center",
                      href: "/AboutUs.html",
                      role: "button",
                      // "data-bs-toggle": "dropdown",
                      // "aria-expanded": "false",
                      children: "About Us",
                    }),
                    // (0, i.jsxs)("div", {
                    //   className: "mega-menu fix start-50 translate-middle-x",
                    //   children: [
                    //     (0, i.jsx)("div", {
                    //       className: "container",
                    //       children: (0, i.jsx)("div", {
                    //         className: "row",
                    //         children: (0, i.jsx)("div", {
                    //           className: "col-12",
                    //           children: (0, i.jsx)("div", {
                    //             className: "mega-menu-content",
                    //             children: (0, i.jsxs)("div", {
                    //               className: "row",
                    //               children: [
                    //                 (0, i.jsx)("div", {
                    //                   className: "col-2",
                    //                   children: (0, i.jsxs)("div", {
                    //                     className: "mega-menu-list",
                    //                     children: [
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7",
                    //                         children: "ABOUT US",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-about",
                    //                                 children: "About us v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-about-2",
                    //                                 children: "About us v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-about-3",
                    //                                 children: "About us v.3",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7 mt-4",
                    //                         children: "SERVICES",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-services-1",
                    //                                 children: "Services v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-services-2",
                    //                                 children: "Services v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-services-3",
                    //                                 children: "Services v.3",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-services-details-1",
                    //                                 children:
                    //                                   "Services details v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-services-details-2",
                    //                                 children:
                    //                                   "Services details v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                     ],
                    //                   }),
                    //                 }),
                    //                 (0, i.jsx)("div", {
                    //                   className: "col-2",
                    //                   children: (0, i.jsxs)("div", {
                    //                     className: "mega-menu-list",
                    //                     children: [
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7",
                    //                         children: "OUR TEAM",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-1",
                    //                                 children: "Our team v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-2",
                    //                                 children: "Our team v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-3",
                    //                                 children: "Our team v.3",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-4",
                    //                                 children: "Our team v.4",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-5",
                    //                                 children: "Our team v.5",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-6",
                    //                                 children: "Our team v.6",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-detail-1",
                    //                                 children: "Team detail v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-team-detail-2",
                    //                                 children: "Team detail v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                     ],
                    //                   }),
                    //                 }),
                    //                 (0, i.jsx)("div", {
                    //                   className: "col-2",
                    //                   children: (0, i.jsxs)("div", {
                    //                     className: "mega-menu-list",
                    //                     children: [
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7",
                    //                         children: "FEATURES",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-features-1",
                    //                                 children: "Features v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-features-2",
                    //                                 children: "Features v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7 mt-4",
                    //                         children: "PRICING",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-pricing-01",
                    //                                 children: "Pricing v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-pricing-02",
                    //                                 children: "Pricing v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7 mt-4",
                    //                         children: "CONTACT",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-contact-1",
                    //                                 children: "Contact v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-contact-2",
                    //                                 children: "Contact v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-contact-3",
                    //                                 children: "Contact v.3",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                     ],
                    //                   }),
                    //                 }),
                    //                 (0, i.jsx)("div", {
                    //                   className: "col-2",
                    //                   children: (0, i.jsxs)("div", {
                    //                     className: "mega-menu-list",
                    //                     children: [
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7",
                    //                         children: "BLOG",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-blog-1",
                    //                                 children: "Blog v.1",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-blog-2",
                    //                                 children: "Blog v.2",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-blog-details",
                    //                                 children: "Blog details",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7 mt-4",
                    //                         children: "CASE STUDY",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-case-study",
                    //                                 children: "Case Study",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-case-study-details",
                    //                                 children:
                    //                                   "Case study details",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7 mt-4",
                    //                         children: "AUTHENTICATION",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-register",
                    //                                 children: "Register",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-login",
                    //                                 children: "Sign in",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                     ],
                    //                   }),
                    //                 }),
                    //                 (0, i.jsx)("div", {
                    //                   className: "col-2",
                    //                   children: (0, i.jsxs)("div", {
                    //                     className: "mega-menu-list",
                    //                     children: [
                    //                       (0, i.jsx)("p", {
                    //                         className:
                    //                           "text-primary fw-bold mb-1 fs-7",
                    //                         children: "UTILITIES",
                    //                       }),
                    //                       (0, i.jsxs)("ul", {
                    //                         className: "list-unstyled",
                    //                         children: [
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-work-process",
                    //                                 children: "Work Process",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-book-a-demo",
                    //                                 children: "Book a demo",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-integration",
                    //                                 children: "Integration",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-changelog",
                    //                                 children: "Change log",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-privacy-policy",
                    //                                 children: "Privacy policy",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-terms-conditions",
                    //                                 children:
                    //                                   "Terms conditions",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-comming-soon",
                    //                                 children: "Comming soon",
                    //                               }
                    //                             ),
                    //                           }),
                    //                           (0, i.jsx)("li", {
                    //                             children: (0, i.jsx)(
                    //                               d.default,
                    //                               {
                    //                                 className:
                    //                                   "dropdown-item position-relative z-1",
                    //                                 href: "/page-404",
                    //                                 children: "Error 404",
                    //                               }
                    //                             ),
                    //                           }),
                    //                         ],
                    //                       }),
                    //                     ],
                    //                   }),
                    //                 }),
                    //                 (0, i.jsxs)("div", {
                    //                   className: "col-2",
                    //                   children: [
                    //                     (0, i.jsxs)("div", {
                    //                       className: "mega-menu-list",
                    //                       children: [
                    //                         (0, i.jsx)("p", {
                    //                           className:
                    //                             "text-primary fw-bold mb-1 fs-7",
                    //                           children: "STYLE GUIDE",
                    //                         }),
                    //                         (0, i.jsxs)("ul", {
                    //                           className: "list-unstyled",
                    //                           children: [
                    //                             (0, i.jsx)("li", {
                    //                               children: (0, i.jsx)(
                    //                                 d.default,
                    //                                 {
                    //                                   className:
                    //                                     "dropdown-item position-relative z-1",
                    //                                   href: "/page-style-guide",
                    //                                   children:
                    //                                     "Color  Typography",
                    //                                 }
                    //                               ),
                    //                             }),
                    //                             (0, i.jsx)("li", {
                    //                               children: (0, i.jsx)(
                    //                                 d.default,
                    //                                 {
                    //                                   className:
                    //                                     "dropdown-item position-relative z-1",
                    //                                   href: "/page-elements",
                    //                                   children:
                    //                                     "Basic elements",
                    //                                 }
                    //                               ),
                    //                             }),
                    //                           ],
                    //                         }),
                    //                       ],
                    //                     }),
                    //                     (0, i.jsxs)("div", {
                    //                       className:
                    //                         "position-relative bg-4 rounded-3 mt-5",
                    //                       children: [
                    //                         (0, i.jsx)("img", {
                    //                           className: "rounded-3",
                    //                           src: "/assets/imgs/template/bg-card.png",
                    //                           alt: "",
                    //                         }),
                    //                         (0, i.jsxs)("div", {
                    //                           className:
                    //                             "position-absolute top-50 start-50 translate-middle z-0",
                    //                           children: [
                    //                             (0, i.jsx)("img", {
                    //                               className: "ms-3",
                    //                               src: "/assets/imgs/logo/logo-dark.svg",
                    //                               alt: "CodM",
                    //                             }),
                    //                             (0, i.jsxs)("p", {
                    //                               className:
                    //                                 "fs-7 fw-bold text-900 text-center my-3 text-nowrap",
                    //                               children: [
                    //                                 "Multi-layout SaaS  ",
                    //                                 (0, i.jsx)("br", {}),
                    //                                 " Startup Website ",
                    //                                 (0, i.jsx)("br", {}),
                    //                                 " Template",
                    //                               ],
                    //                             }),
                    //                             (0, i.jsxs)("div", {
                    //                               className: "d-flex mt-3 ms-3",
                    //                               children: [
                    //                                 (0, i.jsx)("img", {
                    //                                   src: "/assets/imgs/other/avatar-1.png",
                    //                                   alt: "CodM",
                    //                                 }),
                    //                                 (0, i.jsx)("img", {
                    //                                   className: "avt-hero",
                    //                                   src: "/assets/imgs/other/avatar-2.png",
                    //                                   alt: "CodM",
                    //                                 }),
                    //                                 (0, i.jsx)("img", {
                    //                                   className: "avt-hero ",
                    //                                   src: " assets/imgs/other/avatar-3.png",
                    //                                   alt: "CodM",
                    //                                 }),
                    //                               ],
                    //                             }),
                    //                             (0, i.jsxs)(d.default, {
                    //                               href: "#",
                    //                               className:
                    //                                 "btn btn-md btn-gradient fs-8 mt-3 text-nowrap",
                    //                               children: [
                    //                                 "Get this now",
                    //                                 (0, i.jsxs)("svg", {
                    //                                   xmlns:
                    //                                     "http://www.w3.org/2000/svg",
                    //                                   width: 18,
                    //                                   height: 18,
                    //                                   viewBox: "0 0 18 18",
                    //                                   fill: "none",
                    //                                   children: [
                    //                                     (0, i.jsx)("path", {
                    //                                       d: "M12.5477 11.3147V5.30603H6.53906",
                    //                                       stroke: "white",
                    //                                       strokeWidth:
                    //                                         "1.06034",
                    //                                       strokeLinecap:
                    //                                         "round",
                    //                                       strokeLinejoin:
                    //                                         "round",
                    //                                     }),
                    //                                     (0, i.jsx)("path", {
                    //                                       d: "M12.3707 5.48276L5.125 12.7284",
                    //                                       stroke: "white",
                    //                                       strokeWidth:
                    //                                         "1.06034",
                    //                                       strokeLinecap:
                    //                                         "round",
                    //                                       strokeLinejoin:
                    //                                         "round",
                    //                                     }),
                    //                                   ],
                    //                                 }),
                    //                               ],
                    //                             }),
                    //                           ],
                    //                         }),
                    //                       ],
                    //                     }),
                    //                   ],
                    //                 }),
                    //               ],
                    //             }),
                    //           }),
                    //         }),
                    //       }),
                    //     }),
                    //     (0, i.jsx)("div", {
                    //       className:
                    //         "position-absolute top-0 start-50 translate-middle-x z-0",
                    //       children: (0, i.jsx)("img", {
                    //         src: "/assets/imgs/team-1/bg-line.png",
                    //         alt: "CodM",
                    //       }),
                    //     }),
                    //     (0, i.jsx)("div", {
                    //       className:
                    //         "ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0",
                    //     }),
                    //     (0, i.jsx)("div", {
                    //       className:
                    //         "ellipse-rotate-primary-sm position-absolute top-0 end-0 translate-middle-y z-0",
                    //     }),
                    //   ],
                    // }),
                  ],
                }),
                (0, i.jsxs)("li", {
                  className: "nav-item dropdown has-mega",
                  children: [
                    (0, i.jsx)(d.default, {
                      className: "nav-link fw-bold d-flex align-items-center",
                      href: "/Services.html",
                      role: "button",
                      // "data-bs-toggle": "dropdown",
                      // "aria-expanded": "false",
                      children: "Services",
                    }),
                    // (0, i.jsxs)("div", {
                    //   className: "mega-menu fix",
                    //   children: [
                    //     (0, i.jsxs)("div", {
                    //       className:
                    //         "d-flex flex-wrap gap-2 position-relative z-1",
                    //       children: [
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-navigation",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Navigation",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "09",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-hero",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Hero",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "05",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-logo-cloud",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Logo cloud",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "05",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-cta",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Call to action",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "15",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-how-it-work",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "How it work",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "02",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-services",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Services",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "04",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-team",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Team",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "07",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-pricing",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Pricing",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "05",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-faqs",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "FAQS",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "03",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-testimonial",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Testimonials",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "04",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-blog",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Blog",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "05",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-newsletter",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Newsletter",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "03",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-footer",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Footer",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "05",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-features",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Features",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "13",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-projects",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Projects",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "02",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-contact",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Contact",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "06",
                    //             }),
                    //           ],
                    //         }),
                    //         (0, i.jsxs)(d.default, {
                    //           href: "/section-static",
                    //           className:
                    //             "btn btn-md btn-filter mb-2 me-2 rounded-pill py-2 d-inline-flex",
                    //           children: [
                    //             "Static",
                    //             (0, i.jsx)("span", {
                    //               className:
                    //                 "rounded-pill ms-2 fs-9 bg-primary-soft text-dark px-2 py-1",
                    //               children: "03",
                    //             }),
                    //           ],
                    //         }),
                    //       ],
                    //     }),
                    //     (0, i.jsx)("div", {
                    //       className: "position-absolute bottom-0 end-0 z-0",
                    //       children: (0, i.jsx)("img", {
                    //         src: "/assets/imgs/other/bg-line.png",
                    //         alt: "CodM",
                    //       }),
                    //     }),
                    //     (0, i.jsx)("div", {
                    //       className:
                    //         "ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0",
                    //     }),
                    //   ],
                    // }),
                  ],
                }),
                // (0, i.jsxs)("li", {
                //   className: "nav-item dropdown menu-item-has-children",
                //   children: [
                //     (0, i.jsx)(d.default, {
                //       className: "nav-link fw-bold d-flex align-items-center",
                //       href: "#",
                //       role: "button",
                //       "data-bs-toggle": "dropdown",
                //       "aria-expanded": "false",
                //       children: "Products",
                //     }),
                //     // (0, i.jsxs)("div", {
                //     //   className: "dropdown-menu p-4 fix",
                //     //   children: [
                //     //     (0, i.jsxs)("ul", {
                //     //       className: "list-unstyled",
                //     //       children: [
                //     //         (0, i.jsx)("li", {
                //     //           className: "position-relative border-bottom z-1",
                //     //           children: (0, i.jsx)(d.default, {
                //     //             className:
                //     //               "dropdown-item position-relative z-1 d-flex align-items-start",
                //     //             href: "/page-style-guide",
                //     //             children: "Style guide",
                //     //           }),
                //     //         }),
                //     //         (0, i.jsx)("li", {
                //     //           className: "position-relative z-1",
                //     //           children: (0, i.jsx)(d.default, {
                //     //             className:
                //     //               "dropdown-item position-relative z-1 d-flex align-items-start",
                //     //             href: "/page-elements",
                //     //             children: "Elements",
                //     //           }),
                //     //         }),
                //     //       ],
                //     //     }),
                //     //     (0, i.jsx)("div", {
                //     //       className:
                //     //         "ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0",
                //     //     }),
                //     //     (0, i.jsx)("div", {
                //     //       className:
                //     //         "ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0",
                //     //     }),
                //     //   ],
                //     // }),
                //   ],
                // }),
                (0, i.jsx)("li", {
                  className: "nav-item",
                  children: (0, i.jsx)(d.default, {
                    className: "nav-link fw-bold d-flex align-items-center",
                    href: "/contact.html",
                    children: "Contact",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function v(e) {
        let {
          scroll: s,
          isMobileMenu: a,
          handleMobileMenu: l,
          isSearch: t,
          handleSearch: r,
          isOffCanvas: n,
          handleOffCanvas: c,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            children: [
              (0, i.jsx)("nav", {
                className:
                  "navbar navbar-expand-lg navbar-light w-100 z-999 ".concat(
                    s ? "navbar-stick" : ""
                  ),
                style: {
                  position: "".concat(s ? "fixed" : "relative"),
                  top: "".concat(s ? "0" : "auto"),
                },
                children: (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsxs)(d.default, {
                      className:
                        "navbar-brand d-flex main-logo align-items-center",
                      href: "/",
                      children: [
                        (0, i.jsx)("img", {
                          src: "/assets/imgs/template/logo-no-background.png",
                          // src: "logo.jpg",
                          alt: "CodM",
                        }),
                      ],
                    }),
                    (0, i.jsx)(g, {}),
                    (0, i.jsxs)("div", {
                      className:
                        "d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0",
                      children: [
                        (0, i.jsx)("div", {
                          // "data-bs-toggle": "offcanvas",
                          // "data-bs-target": ".offcanvasTop",
                          onClick: r,
                          className: "",
                          // children: (0, i.jsx)("svg", {
                          //   xmlns: "http://www.w3.org/2000/svg",
                          //   width: 24,
                          //   height: 24,
                          //   viewBox: "0 0 24 24",
                          //   fill: "none",
                          //   children: (0, i.jsx)("path", {
                          //     className: "stroke-dark",
                          //     d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                          //     stroke: "black",
                          //     strokeWidth: "1.5",
                          //     strokeLinecap: "round",
                          //     strokeLinejoin: "round",
                          //   }),
                          // }),
                        }),
                        (0, i.jsx)(u, {}),
                        (0, i.jsx)(d.default, {
                          href: "#",
                          className: "btn btn-gradient d-none d-md-block",
                          children: "Join US",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "burger-icon burger-icon-white border rounded-3",
                          onClick: l,
                          children: [
                            (0, i.jsx)("span", {
                              className: "burger-icon-top",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-mid",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-bottom",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(p, { handleOffCanvas: c, isOffCanvas: n }),
              (0, i.jsx)(j, { isSearch: t, handleSearch: r }),
              (0, i.jsx)(x, { handleMobileMenu: l, isMobileMenu: a }),
            ],
          }),
        });
      }
      function w(e) {
        let {
          scroll: s,
          isMobileMenu: a,
          handleMobileMenu: l,
          isSearch: t,
          handleSearch: r,
          isOffCanvas: n,
          handleOffCanvas: c,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            children: [
              (0, i.jsx)("nav", {
                className:
                  "navbar navbar-expand-lg navbar-light w-100 z-999 ".concat(
                    s ? "navbar-stick" : ""
                  ),
                style: {
                  position: "".concat(s ? "fixed" : "relative"),
                  top: "".concat(s ? "0" : "auto"),
                  bottom: "".concat(s ? "auto" : "0"),
                },
                children: (0, i.jsxs)("div", {
                  className: "container-fluid px-md-8 px-2",
                  children: [
                    (0, i.jsxs)(d.default, {
                      className:
                        "navbar-brand d-flex main-logo align-items-center",
                      href: "/",
                      children: [
                        (0, i.jsx)("img", {
                          src: "assets/imgs/template/logo-no-background.png",
                          alt: "CodM",
                        }),
                        (0, i.jsx)("span", { children: "CodM" }),
                      ],
                    }),
                    (0, i.jsx)(g, {}),
                    (0, i.jsxs)("div", {
                      className:
                        "d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0",
                      children: [
                        (0, i.jsx)(d.default, {
                          // href: "javascript:void(0)",
                          // "data-bs-toggle": "offcanvas",
                          // "data-bs-target": ".offcanvasTop",
                          onClick: r,
                          className: "cursor-pointer",
                          children: (0, i.jsx)("svg", {
                            xmlns: "",
                            width: 24,
                            height: 24,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, i.jsx)("path", {
                              className: "stroke-dark",
                              d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, i.jsx)(u, {}),
                        (0, i.jsx)(d.default, {
                          href: "#",
                          className: "btn btn-gradient d-none d-md-block",
                          children: "Join For Free Trial 2",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "burger-icon burger-icon-white border rounded-3",
                          onClick: l,
                          children: [
                            (0, i.jsx)("span", {
                              className: "burger-icon-top",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-mid",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-bottom",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(p, { handleOffCanvas: c, isOffCanvas: n }),
              (0, i.jsx)(j, { isSearch: t, handleSearch: r }),
              (0, i.jsx)(x, { handleMobileMenu: l, isMobileMenu: a }),
            ],
          }),
        });
      }
      function b(e) {
        let {
          scroll: s,
          isMobileMenu: a,
          handleMobileMenu: l,
          isSearch: t,
          handleSearch: r,
          isOffCanvas: n,
          handleOffCanvas: c,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("div", {
                className: "top-bar position-relative z-4 @@classList",
                // children: (0, i.jsx)("div", {
                //   className: "container-fluid bg-primary-soft",
                //   children: (0, i.jsx)("div", {
                //     className: "container py-2",
                //     children: (0, i.jsxs)("div", {
                //       className:
                //         "d-flex flex-column flex-lg-row justify-content-between align-items-center",
                //       children: [
                //         (0, i.jsxs)("div", {
                //           className:
                //             "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",
                //           children: [
                //             (0, i.jsxs)("a", {
                //               href: "tel:123456789",
                //               className: "pe-4",
                //               children: [
                //                 (0, i.jsx)("svg", {
                //                   xmlns: "http://www.w3.org/2000/svg",
                //                   width: 20,
                //                   height: 21,
                //                   viewBox: "0 0 20 21",
                //                   fill: "none",
                //                   children: (0, i.jsx)("path", {
                //                     d: "M7.41064 4.45833H5.05674C4.45006 4.45833 3.95825 4.95014 3.95825 5.55681C3.95825 11.6236 8.87634 16.5417 14.9431 16.5417C15.5498 16.5417 16.0416 16.0498 16.0416 15.4432V13.0892L13.4523 11.3631L12.1097 12.7057C11.8765 12.9389 11.528 13.0114 11.235 12.8601C10.7381 12.6033 9.93167 12.121 9.13684 11.3631C8.32299 10.5871 7.84615 9.75091 7.60683 9.245C7.4727 8.96141 7.55035 8.63409 7.77216 8.41228L9.13684 7.04761L7.41064 4.45833Z",
                //                     stroke: "#6B7280",
                //                     strokeWidth: "1.5",
                //                     strokeLinecap: "round",
                //                     strokeLinejoin: "round",
                //                   }),
                //                 }),
                //                 (0, i.jsx)("span", {
                //                   className: "text-900 fs-7",
                //                   children: "+01 (24) 568 900",
                //                 }),
                //               ],
                //             }),
                //             (0, i.jsxs)("div", {
                //               className: "location d-flex align-items-center",
                //               children: [
                //                 (0, i.jsxs)("svg", {
                //                   xmlns: "http://www.w3.org/2000/svg",
                //                   width: 20,
                //                   height: 21,
                //                   viewBox: "0 0 20 21",
                //                   fill: "none",
                //                   children: [
                //                     (0, i.jsx)("path", {
                //                       d: "M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z",
                //                       stroke: "#6B7280",
                //                       strokeWidth: "1.5",
                //                       strokeLinecap: "round",
                //                       strokeLinejoin: "round",
                //                     }),
                //                     (0, i.jsx)("path", {
                //                       d: "M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z",
                //                       stroke: "#6B7280",
                //                       strokeWidth: "1.5",
                //                       strokeLinecap: "round",
                //                       strokeLinejoin: "round",
                //                     }),
                //                   ],
                //                 }),
                //                 (0, i.jsx)("span", {
                //                   className: "text-900 ps-1 fs-7",
                //                   children: "0811 Erdman Prairie, Joaville CA",
                //                 }),
                //               ],
                //             }),
                //           ],
                //         }),
                //         (0, i.jsxs)("div", {
                //           className:
                //             "d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end",
                //           children: [
                //             (0, i.jsxs)("svg", {
                //               xmlns: "http://www.w3.org/2000/svg",
                //               width: 20,
                //               height: 21,
                //               viewBox: "0 0 20 21",
                //               fill: "none",
                //               children: [
                //                 (0, i.jsx)("path", {
                //                   d: "M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z",
                //                   stroke: "#6B7280",
                //                   strokeWidth: "1.5",
                //                 }),
                //                 (0, i.jsx)("path", {
                //                   d: "M10 7.16667V10.5L11.6667 12.1667",
                //                   stroke: "#6B7280",
                //                   strokeWidth: "1.5",
                //                 }),
                //               ],
                //             }),
                //             (0, i.jsx)("span", {
                //               className: "text-900 pe-3 ps-1 fs-7",
                //               children: "Mon-Fri: 10:00am - 09:00pm",
                //             }),
                //             // (0, i.jsxs)("a", {
                //             //   href: "mailto:contact@CodM.com",
                //             //   className: "ps-4",
                //             //   children: [
                //             //     (0, i.jsxs)("svg", {
                //             //       xmlns: "http://www.w3.org/2000/svg",
                //             //       width: 20,
                //             //       height: 21,
                //             //       viewBox: "0 0 20 21",
                //             //       fill: "none",
                //             //       children: [
                //             //         (0, i.jsx)("path", {
                //             //           d: "M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z",
                //             //           stroke: "#6B7280",
                //             //           strokeWidth: "1.5",
                //             //           strokeLinecap: "round",
                //             //           strokeLinejoin: "round",
                //             //         }),
                //             //         (0, i.jsx)("path", {
                //             //           d: "M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667",
                //             //           stroke: "#6B7280",
                //             //           strokeWidth: "1.5",
                //             //           strokeLinecap: "round",
                //             //           strokeLinejoin: "round",
                //             //         }),
                //             //       ],
                //             //     }),
                //             //     (0, i.jsx)("span", {
                //             //       className: "text-900 ps-1 fs-7",
                //             //       children: "contact@CodM.com",
                //             //     }),
                //             //   ],
                //             // }),
                //           ],
                //         }),
                //       ],
                //     }),
                //   }),
                // }),
              }),
              (0, i.jsxs)("header", {
                children: [
                  (0, i.jsx)("nav", {
                    className:
                      "navbar navbar-expand-lg navbar-light w-100 z-999 ".concat(
                        s ? "navbar-stick" : ""
                      ),
                    style: {
                      position: "".concat(s ? "fixed" : "relative"),
                      top: "".concat(s ? "0" : "auto"),
                      bottom: "".concat(s ? "auto" : "0"),
                    },
                    children: (0, i.jsxs)("div", {
                      className: "container",
                      children: [
                        (0, i.jsxs)(d.default, {
                          className:
                            "navbar-brand d-flex main-logo align-items-center",
                          href: "/",
                          children: [
                            (0, i.jsx)("img", {
                              src: "assets/imgs/template/logo-no-background.png",
                              alt: "CodM",
                            }),
                            (0, i.jsx)("span", { children: "CodM" }),
                          ],
                        }),
                        (0, i.jsx)(g, {}),
                        (0, i.jsxs)("div", {
                          className:
                            "d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0",
                          children: [
                            (0, i.jsx)("a", {
                              href: "javascript:void(0)",
                              "data-bs-toggle": "offcanvas",
                              "data-bs-target": ".offcanvasTop",
                              onClick: r,
                              className: "cursor-pointer",
                              children: (0, i.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 24,
                                height: 24,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, i.jsx)("path", {
                                  className: "stroke-dark",
                                  d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                                  stroke: "black",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            }),
                            (0, i.jsx)(u, {}),
                            (0, i.jsx)("a", {
                              href: "#",
                              className: "btn btn-gradient d-none d-md-block",
                              children: "Join For Free Trial 3",
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "burger-icon burger-icon-white border rounded-3",
                              onClick: l,
                              children: [
                                (0, i.jsx)("span", {
                                  className: "burger-icon-top",
                                }),
                                (0, i.jsx)("span", {
                                  className: "burger-icon-mid",
                                }),
                                (0, i.jsx)("span", {
                                  className: "burger-icon-bottom",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(p, { handleOffCanvas: c, isOffCanvas: n }),
                  (0, i.jsx)(j, { isSearch: t, handleSearch: r }),
                  (0, i.jsx)(x, { handleMobileMenu: l, isMobileMenu: a }),
                ],
              }),
            ],
          }),
        });
      }
      function N(e) {
        let {
          scroll: s,
          isMobileMenu: a,
          handleMobileMenu: l,
          isSearch: t,
          handleSearch: r,
          isOffCanvas: n,
          handleOffCanvas: c,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            children: [
              (0, i.jsx)("nav", {
                className:
                  "navbar navbar-expand-lg navbar-light w-100 z-999 header-4 ".concat(
                    s ? "navbar-stick" : ""
                  ),
                style: {
                  position: "".concat(s ? "fixed" : "relative"),
                  top: "".concat(s ? "0" : "auto"),
                  bottom: "".concat(s ? "auto" : "0"),
                },
                children: (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsxs)(d.default, {
                      className:
                        "navbar-brand d-flex main-logo align-items-center",
                      href: "/",
                      children: [
                        (0, i.jsx)("img", {
                          src: "assets/imgs/template/logo-no-background.png",
                          alt: "CodM",
                        }),
                        (0, i.jsx)("span", { children: "CodM" }),
                      ],
                    }),
                    (0, i.jsx)(g, {}),
                    (0, i.jsxs)("div", {
                      className:
                        "d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0",
                      children: [
                        (0, i.jsx)("a", {
                          href: "javascript:void(0)",
                          "data-bs-toggle": "offcanvas",
                          "data-bs-target": ".offcanvasTop",
                          onClick: r,
                          className: "cursor-pointer",
                          children: (0, i.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 24,
                            height: 24,
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, i.jsx)("path", {
                              className: "stroke-dark",
                              d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                              stroke: "black",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          }),
                        }),
                        (0, i.jsx)(u, {}),
                        (0, i.jsx)("a", {
                          className:
                            "menu-tigger bg-primary icon-shape icon-md rounded-2 d-none d-md-flex cursor-pointer",
                          onClick: c,
                          children: (0, i.jsx)("img", {
                            src: "assets/imgs/logo/icon-menu.svg",
                            alt: "CodM",
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "burger-icon burger-icon-white border rounded-3",
                          onClick: l,
                          children: [
                            (0, i.jsx)("span", {
                              className: "burger-icon-top",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-mid",
                            }),
                            (0, i.jsx)("span", {
                              className: "burger-icon-bottom",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(p, { handleOffCanvas: c, isOffCanvas: n }),
              (0, i.jsx)(j, { isSearch: t, handleSearch: r }),
              (0, i.jsx)(x, { handleMobileMenu: l, isMobileMenu: a }),
            ],
          }),
        });
      }
      function C(e) {
        let {
          scroll: s,
          isMobileMenu: a,
          handleMobileMenu: l,
          isSearch: t,
          handleSearch: r,
          isOffCanvas: n,
          handleOffCanvas: c,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              className: "top-bar position-relative z-4",
              children: (0, i.jsx)("div", {
                className: "container-fluid bg-primary",
                children: (0, i.jsx)("div", {
                  className: "",
                  children: (0, i.jsxs)("div", {
                    className:
                      "d-flex flex-column flex-lg-row justify-content-between align-items-center",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",
                        // children: [
                        //   (0, i.jsxs)("a", {
                        //     href: "mailto:contact@CodM.com",
                        //     className: "pe-4 d-none d-md-flex",
                        //     children: [
                        //       (0, i.jsxs)("svg", {
                        //         xmlns: "http://www.w3.org/2000/svg",
                        //         width: 20,
                        //         height: 21,
                        //         viewBox: "0 0 20 21",
                        //         fill: "none",
                        //         children: [
                        //           (0, i.jsx)("path", {
                        //             d: "M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z",
                        //             stroke: "white",
                        //             strokeWidth: "1.5",
                        //             strokeLinecap: "round",
                        //             strokeLinejoin: "round",
                        //           }),
                        //           (0, i.jsx)("path", {
                        //             d: "M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667",
                        //             stroke: "white",
                        //             strokeWidth: "1.5",
                        //             strokeLinecap: "round",
                        //             strokeLinejoin: "round",
                        //           }),
                        //         ],
                        //       }),
                        //       (0, i.jsx)("span", {
                        //         className: "text-white ps-1 fs-7",
                        //         children: "contact@CodM.com",
                        //       }),
                        //     ],
                        //   }),
                        //   (0, i.jsxs)("div", {
                        //     className: "location d-flex align-items-center",
                        //     children: [
                        //       (0, i.jsxs)("svg", {
                        //         xmlns: "http://www.w3.org/2000/svg",
                        //         width: 20,
                        //         height: 21,
                        //         viewBox: "0 0 20 21",
                        //         fill: "none",
                        //         children: [
                        //           (0, i.jsx)("path", {
                        //             d: "M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z",
                        //             stroke: "white",
                        //             strokeWidth: "1.5",
                        //             strokeLinecap: "round",
                        //             strokeLinejoin: "round",
                        //           }),
                        //           (0, i.jsx)("path", {
                        //             d: "M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z",
                        //             stroke: "white",
                        //             strokeWidth: "1.5",
                        //             strokeLinecap: "round",
                        //             strokeLinejoin: "round",
                        //           }),
                        //         ],
                        //       }),
                        //       (0, i.jsx)("span", {
                        //         className: "text-white ps-1 fs-7",
                        //         children: "0811 Erdman Prairie, Joaville CA",
                        //       }),
                        //     ],
                        //   }),
                        // ],
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "d-flex d-none d-lg-flex align-items-center justify-content-center justify-content-lg-end",
                        // children: [
                        //   (0, i.jsxs)("svg", {
                        //     xmlns: "http://www.w3.org/2000/svg",
                        //     width: 20,
                        //     height: 21,
                        //     viewBox: "0 0 20 21",
                        //     fill: "none",
                        //     children: [
                        //       (0, i.jsx)("path", {
                        //         d: "M10.0002 16.5417C13.3369 16.5417 16.0418 13.8367 16.0418 10.5C16.0418 7.16327 13.3369 4.45833 10.0002 4.45833C6.66344 4.45833 3.9585 7.16327 3.9585 10.5C3.9585 13.8367 6.66344 16.5417 10.0002 16.5417Z",
                        //         stroke: "white",
                        //         strokeWidth: "1.5",
                        //       }),
                        //       (0, i.jsx)("path", {
                        //         d: "M10 7.16667V10.5L11.6667 12.1667",
                        //         stroke: "white",
                        //         strokeWidth: "1.5",
                        //       }),
                        //     ],
                        //   }),
                        //   (0, i.jsx)("span", {
                        //     className: "text-white pe-3 ps-1 fs-7",
                        //     children: "Mon-Fri: 10:00am - 09:00pm",
                        //   }),
                        //   (0, i.jsx)("a", {
                        //     href: "https://www.facebook.com/",
                        //     className: " text-white icon-shape icon-md",
                        //     children: (0, i.jsx)("svg", {
                        //       xmlns: "http://www.w3.org/2000/svg",
                        //       width: 9,
                        //       height: 17,
                        //       viewBox: "0 0 9 17",
                        //       fill: "none",
                        //       children: (0, i.jsx)("path", {
                        //         d: "M8.22314 9.20334H5.91602V16.094H2.83984V9.20334H0.317383V6.37326H2.83984V4.18918C2.83984 1.72824 4.31641 0.343964 6.56201 0.343964C7.63867 0.343964 8.77686 0.559296 8.77686 0.559296V2.98947H7.51562C6.28516 2.98947 5.91602 3.72775 5.91602 4.52756V6.37326H8.65381L8.22314 9.20334Z",
                        //         fill: "white",
                        //       }),
                        //     }),
                        //   }),
                        //   (0, i.jsx)("a", {
                        //     href: "https://twitter.com/",
                        //     className: " text-white icon-shape icon-md",
                        //     children: (0, i.jsx)("svg", {
                        //       xmlns: "http://www.w3.org/2000/svg",
                        //       width: 15,
                        //       height: 14,
                        //       viewBox: "0 0 15 14",
                        //       fill: "none",
                        //       children: (0, i.jsx)("path", {
                        //         d: "M11.2163 0.820312H13.3696L8.63232 6.26514L14.231 13.6172H9.86279L6.41748 9.15674L2.51074 13.6172H0.32666L5.40234 7.83398L0.0498047 0.820312H4.54102L7.61719 4.91162L11.2163 0.820312ZM10.4473 12.3252H11.647L3.89502 2.05078H2.60303L10.4473 12.3252Z",
                        //         fill: "white",
                        //       }),
                        //     }),
                        //   }),
                        //   (0, i.jsx)("a", {
                        //     href: "https://www.linkedin.com/",
                        //     className: " text-white icon-shape icon-md",
                        //     children: (0, i.jsx)("svg", {
                        //       xmlns: "http://www.w3.org/2000/svg",
                        //       width: 15,
                        //       height: 15,
                        //       viewBox: "0 0 15 15",
                        //       fill: "none",
                        //       children: (0, i.jsx)("path", {
                        //         d: "M13.7188 0.328537C14.2417 0.328537 14.7031 0.789963 14.7031 1.34367V13.1254C14.7031 13.6791 14.2417 14.1098 13.7188 14.1098H1.87549C1.35254 14.1098 0.921875 13.6791 0.921875 13.1254V1.34367C0.921875 0.789963 1.35254 0.328537 1.87549 0.328537H13.7188ZM5.07471 12.141V5.58879H3.04443V12.141H5.07471ZM4.05957 4.66594C4.70557 4.66594 5.22852 4.14299 5.22852 3.49699C5.22852 2.851 4.70557 2.29729 4.05957 2.29729C3.38281 2.29729 2.85986 2.851 2.85986 3.49699C2.85986 4.14299 3.38281 4.66594 4.05957 4.66594ZM12.7344 12.141V8.54192C12.7344 6.7885 12.3345 5.40422 10.2734 5.40422C9.28906 5.40422 8.6123 5.95793 8.33545 6.48088H8.30469V5.58879H6.3667V12.141H8.39697V8.91106C8.39697 8.04973 8.55078 7.21916 9.62744 7.21916C10.6733 7.21916 10.6733 8.20354 10.6733 8.94182V12.141H12.7344Z",
                        //         fill: "white",
                        //       }),
                        //     }),
                        //   }),
                        //   (0, i.jsx)("a", {
                        //     href: "https://www.behance.net/",
                        //     className: " text-white icon-shape icon-md",
                        //     children: (0, i.jsx)("svg", {
                        //       xmlns: "http://www.w3.org/2000/svg",
                        //       width: 19,
                        //       height: 12,
                        //       viewBox: "0 0 19 12",
                        //       fill: "none",
                        //       children: (0, i.jsx)("path", {
                        //         d: "M7.65234 5.66483C8.9751 6.03397 9.62109 7.0491 9.62109 8.40262C9.62109 10.6175 7.77539 11.5711 5.77588 11.5711H0.515625V0.681427H5.65283C7.49854 0.681427 9.12891 1.20438 9.12891 3.38846C9.12891 4.46512 8.60596 5.17264 7.65234 5.66483ZM2.88428 2.52713V5.08035H5.31445C6.17578 5.08035 6.79102 4.71121 6.79102 3.78836C6.79102 2.77322 6.02197 2.52713 5.16064 2.52713H2.88428ZM5.46826 9.72537C6.42188 9.72537 7.22168 9.38699 7.22168 8.27957C7.22168 7.17215 6.57568 6.71072 5.49902 6.71072H2.88428V9.72537H5.46826ZM16.481 2.3118V1.23514H12.082V2.3118H16.481ZM18.2344 7.75662C18.2344 7.87967 18.2036 8.03348 18.2036 8.15652H12.5127C12.5127 9.41776 13.1895 10.156 14.4507 10.156C15.0967 10.156 15.958 9.81766 16.1733 9.1409H18.0806C17.4961 10.9251 16.2656 11.7864 14.3892 11.7864C11.8975 11.7864 10.3286 10.0945 10.3286 7.63358C10.3286 5.26492 11.959 3.44998 14.3892 3.44998C16.8501 3.44998 18.2344 5.41873 18.2344 7.75662ZM12.5127 6.77225H16.0503C15.958 5.72635 15.4043 5.11111 14.2969 5.11111C13.2817 5.11111 12.5742 5.75711 12.5127 6.77225Z",
                        //         fill: "white",
                        //       }),
                        //     }),
                        //   }),
                        // ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, i.jsxs)("header", {
              children: [
                (0, i.jsx)("nav", {
                  className:
                    "navbar navbar-expand-lg navbar-light w-100 border-bottom z-999 ".concat(
                      s ? "navbar-stick" : ""
                    ),
                  style: {
                    position: "".concat(s ? "fixed" : "relative"),
                    top: "".concat(s ? "0" : "auto"),
                    bottom: "".concat(s ? "auto" : "0"),
                  },
                  children: (0, i.jsxs)("div", {
                    className: "container-fluid px-lg-8",
                    children: [
                      (0, i.jsxs)(d.default, {
                        className:
                          "navbar-brand d-flex main-logo align-items-center",
                        href: "/",
                        children: [
                          (0, i.jsx)("img", {
                            src: "assets/imgs/template/logo-no-background.png",
                            alt: "CodM",
                          }),
                          // (0, i.jsx)("span", { children: "CodM" }),
                        ],
                      }),
                      (0, i.jsx)(g, {}),
                      (0, i.jsxs)("div", {
                        className:
                          "d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "d-lg-flex align-items-center pe-8 d-none",
                            // children: [
                            //   (0, i.jsx)("a", {
                            //     href: "telto:+1234567890",
                            //     className:
                            //       "icon-shape icon-lg bg-linear-2 rounded-circle mx-3",
                            //     children: (0, i.jsx)("svg", {
                            //       className: "d-block",
                            //       xmlns: "http://www.w3.org/2000/svg",
                            //       width: 25,
                            //       height: 25,
                            //       viewBox: "0 0 25 25",
                            //       fill: "none",
                            //       children: (0, i.jsx)("path", {
                            //         className: "stroke-white",
                            //         d: "M9.39286 5.25H6.56818C5.84017 5.25 5.25 5.84017 5.25 6.56818C5.25 13.8483 11.1517 19.75 18.4318 19.75C19.1598 19.75 19.75 19.1598 19.75 18.4318V15.6071L16.6429 13.5357L15.0317 15.1468C14.7519 15.4267 14.3337 15.5137 13.9821 15.3321C13.3858 15.024 12.4181 14.4452 11.4643 13.5357C10.4877 12.6045 9.91548 11.6011 9.62829 10.994C9.46734 10.6537 9.56052 10.2609 9.82669 9.99474L11.4643 8.35714L9.39286 5.25Z",
                            //         stroke: "white",
                            //         strokeWidth: "1.5",
                            //         strokeLinecap: "round",
                            //         strokeLinejoin: "round",
                            //       }),
                            //     }),
                            //   }),
                            //   // (0, i.jsxs)("div", {
                            //   //   children: [
                            //   //     (0, i.jsx)("p", {
                            //   //       className: "mb-0 text-500 fs-8",
                            //   //       children: "Have Any Questions?",
                            //   //     }),
                            //   //     (0, i.jsx)("p", {
                            //   //       className: "mb-0 text-900 fw-bold",
                            //   //       children: "+01 567 890 68",
                            //   //     }),
                            //   //   ],
                            //   // }),
                            // ],
                          }),
                          // (0, i.jsx)("a", {
                          //   href: "javascript:void(0)",
                          //   "data-bs-toggle": "offcanvas",
                          //   "data-bs-target": ".offcanvasTop",
                          //   onClick: r,
                          //   className: "cursor-pointer",
                          //   children: (0, i.jsx)("svg", {
                          //     xmlns: "http://www.w3.org/2000/svg",
                          //     width: 24,
                          //     height: 24,
                          //     viewBox: "0 0 24 24",
                          //     fill: "none",
                          //     children: (0, i.jsx)("path", {
                          //       className: "stroke-dark",
                          //       d: "M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z",
                          //       stroke: "black",
                          //       strokeWidth: "1.5",
                          //       strokeLinecap: "round",
                          //       strokeLinejoin: "round",
                          //     }),
                          //   }),
                          // }),
                          (0, i.jsx)(u, {}),
                          (0, i.jsxs)("a", {
                            href: "#",
                            className: "btn btn-gradient d-none d-md-block",
                            children: [
                              "Join Us",
                              (0, i.jsxs)("svg", {
                                className: "ms-2",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: 19,
                                height: 18,
                                viewBox: "0 0 19 18",
                                fill: "none",
                                children: [
                                  (0, i.jsx)("g", {
                                    clipPath: "url(#clip0_474_2370)",
                                    children: (0, i.jsx)("path", {
                                      className: "fill-white",
                                      d: "M13.5633 4.06331L12.7615 4.86512L16.3294 8.43305H0.5V9.56699H16.3294L12.7615 13.1349L13.5633 13.9367L18.5 8.99998L13.5633 4.06331Z",
                                      fill: "white",
                                    }),
                                  }),
                                  (0, i.jsx)("defs", {
                                    children: (0, i.jsx)("clipPath", {
                                      children: (0, i.jsx)("rect", {
                                        width: 18,
                                        height: 18,
                                        fill: "white",
                                        transform: "translate(0.5)",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "burger-icon burger-icon-white border rounded-3",
                            onClick: l,
                            children: [
                              (0, i.jsx)("span", {
                                className: "burger-icon-top",
                              }),
                              (0, i.jsx)("span", {
                                className: "burger-icon-mid",
                              }),
                              (0, i.jsx)("span", {
                                className: "burger-icon-bottom",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(p, { handleOffCanvas: c, isOffCanvas: n }),
                (0, i.jsx)(j, { isSearch: t, handleSearch: r }),
                (0, i.jsx)(x, { handleMobileMenu: l, isMobileMenu: a }),
              ],
            }),
          ],
        });
      }
      function y(e) {
        let {
            headerStyle: s,
            footerStyle: l,
            breadcrumbTitle: d,
            children: x,
          } = e,
          [j, p] = (0, r.useState)(!1),
          [u, g] = (0, r.useState)(!1),
          y = () => {
            g(!u),
              u
                ? document.body.classList.remove("mobile-menu-active")
                : document.body.classList.add("mobile-menu-active");
          },
          [k, L] = (0, r.useState)(!1),
          M = () => L(!k),
          [H, S] = (0, r.useState)(!1),
          z = () => S(!H);
        return (
          (0, r.useEffect)(() => {
            let e = a(29605);
            (window.wow = new e.WOW({ live: !1 })),
              window.wow.init(),
              t().init();
            let s = () => {
              let e = window.scrollY > 100;
              e !== j && p(e);
            };
            return (
              document.addEventListener("scroll", s),
              () => {
                document.removeEventListener("scroll", s);
              }
            );
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", { id: "top" }),
              !s &&
                (0, i.jsx)(C, {
                  scroll: j,
                  isMobileMenu: u,
                  handleMobileMenu: y,
                  isSearch: k,
                  handleSearch: M,
                  isOffCanvas: H,
                  handleOffCanvas: z,
                }),
              1 == s
                ? (0, i.jsx)(v, {
                    scroll: j,
                    isMobileMenu: u,
                    handleMobileMenu: y,
                    isSearch: k,
                    handleSearch: M,
                    isOffCanvas: H,
                    handleOffCanvas: z,
                  })
                : null,
              2 == s
                ? (0, i.jsx)(w, {
                    scroll: j,
                    isMobileMenu: u,
                    handleMobileMenu: y,
                    isSearch: k,
                    handleSearch: M,
                    isOffCanvas: H,
                    handleOffCanvas: z,
                  })
                : null,
              3 == s
                ? (0, i.jsx)(b, {
                    scroll: j,
                    isMobileMenu: u,
                    handleMobileMenu: y,
                    isSearch: k,
                    handleSearch: M,
                    isOffCanvas: H,
                    handleOffCanvas: z,
                  })
                : null,
              4 == s
                ? (0, i.jsx)(N, {
                    scroll: j,
                    isMobileMenu: u,
                    handleMobileMenu: y,
                    isSearch: k,
                    handleSearch: M,
                    isOffCanvas: H,
                    handleOffCanvas: z,
                  })
                : null,
              5 == s
                ? (0, i.jsx)(C, {
                    scroll: j,
                    isMobileMenu: u,
                    handleMobileMenu: y,
                    isSearch: k,
                    handleSearch: M,
                    isOffCanvas: H,
                    handleOffCanvas: z,
                  })
                : null,
              (0, i.jsxs)("main", {
                children: [d && (0, i.jsx)(c, { breadcrumbTitle: d }), x],
              }),
              !l && (0, i.jsx)(o, {}),
              1 == l ? (0, i.jsx)(o, {}) : null,
              2 == l ? (0, i.jsx)(h, {}) : null,
              3 == l ? (0, i.jsx)(m, {}) : null,
              4 == l ? (0, i.jsx)(f, {}) : null,
              (0, i.jsx)(n, { target: "#top" }),
            ],
          })
        );
      }
    },
  },
]);
