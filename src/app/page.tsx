"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      text: "Using BoostX has transformed the way I interact with my fans. The voice messaging is personal and immediate, creating a genuine connection that's both rewarding and fun.",
      name: "Dani",
      imgSrc: "/woman1.png",
    },
    {
      text: "The voice messaging feature on BoostX is a standout. It brings a personal touch to my fan interactions that text alone could never achieve.",
      name: "Kylie",
      imgSrc: "/woman2.png",
    },
    {
      text: "When I launched my AI clone, I didn't expect much. It started as a side project, but now it's generating $20,000 monthly. I never imagined it would grow to this level.",
      name: "Sandra",
      imgSrc: "/woman3.png",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev: number) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev: number) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar w-nav">
        <div className="container-2 w-container">
          <div className="div-block-2">
            <div className="div-block">
              <a className="brand w-nav-brand w--current" href="#">
                <Image
                  src="/logo.png"
                  alt="Logo of BoostX"
                  width={180}
                  height={50}
                  priority
                  className="logo"
                />
              </a>
              <div className="menu-auth-container">
                <div className="auth-buttons">
                  <a className="button-2 w-button" href="#">
                    <strong className="bold-text">Login</strong>
                  </a>
                  <a href="#" className="button w-button">
                    Sign Up
                  </a>
                </div>
                <button
                  className="menu-icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Menu"
                >
                  <Image
                    src="/menu-icon.svg"
                    alt="Menu icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
            <nav className={`nav-menu w-nav-menu ${menuOpen ? 'open' : ''}`}>
              <a className="nav-link w-nav-link" href="#experience">
                How it works
              </a>
              <a className="nav-link w-nav-link" href="#Result">
                Results
              </a>
              <a className="nav-link w-nav-link" href="#Testimonial">
                Testimonials
              </a>
            </nav>
          </div>
        </div>
      </header>




      <main>

        {/*Main text*/}
        <section className="hero">
          <div className="container_1365">
            <div className="div-block-3">
              <div className="div-block-4">
                <h1 className="heading">
                  <div>AI-Voice Companion</div>
                  <span className="text-span">Meet Your Favorite Creator Like Never Before</span>
                </h1>
                <p className="paragraph">Start Talking Now -
                  <strong> Revolutionize Your Fanbase Engagment.</strong>
                </p>
                <div className="div-block-5">
                  <a href="#" className="button w-button">
                    Sign Up
                  </a>
                  <a href="#experience" className="div-block-6 w-inline-block">
                    <div className="text-block">
                      Learn more
                    </div>
                    <Image
                      src="/arrow.png"
                      alt="Button to find out more information about BoostX"
                      width={30}
                      height={30}
                      className="image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*people section*/}
        <section className="over_view">
          <div className="container_1365 _1300">
            <Image
              src="/peopleImages.jpg"
              alt="Content creator engaging with AI clone powered by BoostX technology, enhancing fan interaction through voice messages."
              width={1300}
              height={800}
              layout="responsive"
              className="image-12"
            />
          </div>
        </section>

        {/*number section*/}
        <section id="experience" className="experience">
          <div className="container_1365">
            <div className="div-block-19">
              <h1 className="heading-5">
                Unlock the Future of <span className="text-span-2"> Creator-Fan interactions.</span>
              </h1>
            </div>
            <div className="div-block-18">
              <div className="w-layout-grid grid">
                <div className="div-block-7">
                  <Image
                    src="/1.svg"
                    loading="lazy"
                    alt="AI Personalization step: Explains how the AI uses data from onboarding to train a personalized model, mirroring the creator's communication style using voice, text, and personality cues."
                    width={100}
                    height={100}
                    className="image-2" />
                  <h3 className="heading-6">
                    Create Your AI-Personality
                  </h3>
                  <p className="paragraph-2">
                    Sign up for the AI chatter service and begin the
                    <strong>
                      training phase
                    </strong>.
                    Upload previous chat logs, voice recordings, and answer a series of questions designed to capture your
                    <strong>
                      unique personality traits &amp; speaking style.
                    </strong>
                  </p>
                </div>
                <div className="div-block-7">
                  <Image
                    src="/2.svg"
                    loading="lazy"
                    alt="AI Personalization step: Describes how the AI collects data during onboarding to train a personalized model using machine learning algorithms that analyze voice, text, and personality cues, creating an AI that mirrors the creator's communication style."
                    className="image-3"
                    width={100}
                    height={100}
                  />
                  <h3 className="heading-7">
                    AI Personalization
                  </h3>
                  <p className="paragraph-2">
                    The AI uses the data collected during onboarding to
                    <strong>
                      train a personalized model.
                    </strong>
                    Machine learning algorithms analyze the voice data, text interactions, and personality cues to create
                    <strong> an AI that mirrors the creator’s communication style.
                    </strong>
                  </p>
                </div>
                <div className="div-block-7">
                  <Image
                    src="/3.svg"
                    loading="lazy"
                    alt="Integration and Setup"
                    width={100}
                    height={100}
                    className="image-4"
                  />
                  <h3 className="heading-8">
                    Integration and Setup
                  </h3>
                  <p className="paragraph-2">
                    Once the AI is trained, creators
                    <strong>
                      integrate it into their preferred platforms.
                    </strong>
                    This could involve setting up APIs with social media channels, websites, or other digital interfaces where fans interact with the creator.
                  </p>
                </div>
                <div className="div-block-7 st-current">
                  <Image
                    src="/4.svg"
                    loading="lazy"
                    alt="Creators launch their AI voice chatbot"
                    width={100}
                    height={100}
                    className="image-5"
                  />
                  <h3 className="heading-9">
                    Promotion and Launch
                  </h3>
                  <p className="paragraph-2">
                    Share your new AI voice chatter through social media, email newsletters, and other marketing channels. Youll get a
                    <strong>
                      unique link
                    </strong> that fans can use to start interacting with the your AI directly.
                  </p>
                </div>
                <div className="div-block-7">
                  <Image
                    src="/5.svg"
                    loading="lazy"
                    alt="Fans can chat with the AI version"
                    className="image-6"
                    width={100}
                    height={100}
                  />
                  <h3 className="heading-10">
                    Engaging with Fans
                  </h3>
                  <p className="paragraph-2">Fans use the link to chat with the AI version of the creator. This system allows for
                    <strong>
                      scalable, authentic interactions
                    </strong> where fans can ask questions, get personalized responses, and engage in a way that feels true to the creator’s own manner of communicating.
                  </p>
                </div>
                <div className="div-block-7">
                  <Image
                    src="/6.svg"
                    loading="lazy"
                    alt="Creators can monetize interactions"
                    className="image-7"
                    width={100}
                    height={100}
                  />
                  <h3 className="heading-11">
                    Monetization and Analytics
                  </h3>
                  <p className="paragraph-2">
                    Creators
                    <strong>
                      monetize interactions via subscriptions, pay-per-chat
                    </strong>, or sponsored content. Platform analytics also help refine the AI and boost community engagement,
                    <strong>
                      maximizing fanbase value.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*result section*/}
        <section id="Result" className="result">
          <div className="container_1365">
            <div>
              <div className="div-block-8">
                <h2 className="heading-2">
                  #1 Results with
                </h2>
                <Image src="/logo.png"
                  loading="lazy"
                  width={200}
                  height={50}
                  sizes="(max-width: 479px) 59vw, (max-width: 767px) 132.828125px, (max-width: 1919px) 176px, 195.921875px"
                  alt="BoostX logo alongside the text '#1 Results with BoostX', emphasizing the platform's effectiveness in delivering top-tier results for creators."
                  className="image-8" />
              </div>
            </div>
          </div>
        </section>

        {/*advice section*/}
        <section>
          <div className="container_1365">
            <div className="div-block-9">
              <div className="flex_wrap">
                <div className="div-block-10">
                  <h3 className="heading-3">
                    <strong>
                      Expand your Reach
                    </strong>
                  </h3>
                  <p className="paragraph-3">
                    Creators, connect with more fans than ever before. Fans, dive deeper into the worlds of those you follow. Our platform bridges the gap between celebrity and fan with the power of conversation.
                  </p>
                </div>
                <div className="div-block-10">
                  <h3 className="heading-3">
                    <strong>
                      Privacy First
                    </strong>
                  </h3>
                  <p className="paragraph-3">Your content rights are inalienable and will remain so. We prioritize privacy, ensuring all interactions are securely handled and data is protected.
                  </p>
                </div>
                <div className="div-block-10">
                  <h3 className="heading-3">
                    <strong>
                      Authentic Interactions
                    </strong>
                  </h3>
                  <p className="paragraph-3">
                    Powered by advanced AI, our platform captures the true essence of you. Each interaction is personalized, making your fans feel closer to you as a creators.
                  </p>
                </div>
              </div>
              <div className="div-block-11">
                <Image
                  src="/phoneImage.jpg"
                  loading="lazy"
                  width={800}
                  height={600}
                  alt="Promotional image for an AI-voice"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 390px, (max-width: 1439px) 657px, 653px"
                  className="image-9"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="questions">
          <div className="container_1365">
          </div>
        </section>

        {/*faq section*/}
        <section className="faq">
          <div className="container-4"></div>
          <div className="rl-padding-global-3">
            <div className="rl-container-large-3">
              <div className="rl-padding-section-large-3">
                <div className="rl_faq6_component-2">
                  <div className="rl_faq6_heading-wrapper-2">
                    <h2 className="rl-heading-style-h2-3">FAQs</h2>
                    <div className="rl_faq6_spacing-block-1-2"></div>
                    <p className="rl-text-style-medium-3">
                      We're happy to provide any
                    </p>
                    <p className="rl-text-style-medium-3">
                      more information you might
                    </p>
                    <p className="rl-text-style-medium-3">
                      need. We'll respond within 24
                    </p>
                    <p className="rl-text-style-medium-3">
                      hours guaranteed.
                    </p>
                    <div className="rl_faq6_spacing-block-2-2"></div>
                    <a href="#" className="button w-button">Sign Up Today</a>
                  </div>
                  <div className="rl_faq6_list-2">
                    <div className="w-layout-grid rl_faq6_list-grid-2">
                      {/* Accordion item 1 */}
                      <div className="rl_faq6_accordion-2">
                        <div className="rl_faq6_question-2" onClick={() => toggleAccordion(0)}>
                          <div className="rl_faq6_question-text-2">How does it work?</div>
                          <div
                            className="rl_faq6_icon-wrapper-2"
                            style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            <div className="rl_faq6_icon-2 w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {activeIndex === 0 && (
                          <div className="rl_faq6_answer-2">
                            <div className="rl_faq6_answer-wrapper-2">
                              <p className="rl-text-style-regular-3">
                                It's simple! Just sign up, upload your chats and a voice message, and you’re ready to start interacting with your fans 24/7.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Accordion item 2 */}
                      <div className="rl_faq6_accordion-2">
                        <div className="rl_faq6_question-2" onClick={() => toggleAccordion(1)}>
                          <div className="rl_faq6_question-text-2">How high are the fees?</div>
                          <div
                            className="rl_faq6_icon-wrapper-2"
                            style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            <div className="rl_faq6_icon-2 w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {activeIndex === 1 && (
                          <div className="rl_faq6_answer-2">
                            <div className="rl_faq6_answer-wrapper-2">
                              <p className="rl-text-style-regular-3">
                                There are no upfront fees or risks involved. We operate on a revenue-sharing model and you will get 75%. This way, you only pay when you start earning!
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Accordion item 3 */}
                      <div className="rl_faq6_accordion-2">
                        <div className="rl_faq6_question-2" onClick={() => toggleAccordion(2)}>
                          <div className="rl_faq6_question-text-2">
                            When do we payout?
                          </div>
                          <div
                            className="rl_faq6_icon-wrapper-2"
                            style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            <div className="rl_faq6_icon-2 w-embed">
                              <svg width=" 100%" height=" 100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {activeIndex === 2 && (
                          <div className="rl_faq6_answer-2">
                            <div className="rl_faq6_answer-wrapper-2">
                              <p className="rl-text-style-regular-3">
                                We offer automated bi-weekly payouts, so you can receive your earnings regularly without hassle. Our platform also includes a clear and user-friendly dashboard, allowing you to track your earnings and payouts with ease.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Accordion item 4 */}
                      <div className="rl_faq6_accordion-2">
                        <div className="rl_faq6_question-2" onClick={() => toggleAccordion(3)}>
                          <div className="rl_faq6_question-text-2">
                            Can I delete the bot and my content?
                          </div>
                          <div
                            className="rl_faq6_icon-wrapper-2"
                            style={{
                              transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            <div className="rl_faq6_icon-2 w-embed">
                              <svg width=" 100%" height=" 100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3334 15.6668V16.3334C25.3334 16.7016 25.0349 17.0001 24.6667 17.0001H17.0001V24.6667C17.0001 25.0349 16.7016 25.3334 16.3334 25.3334H15.6667C15.2986 25.3334 15.0001 25.0349 15.0001 24.6667L15.0001 17.0001H7.33341C6.96522 17.0001 6.66675 16.7016 6.66675 16.3334V15.6668C6.66675 15.2986 6.96522 15.0001 7.33341 15.0001H15.0001V7.33341C15.0001 6.96522 15.2986 6.66675 15.6667 6.66675H16.3334C16.7016 6.66675 17.0001 6.96522 17.0001 7.33341V15.0001L24.6667 15.0001C25.0349 15.0001 25.3334 15.2986 25.3334 15.6668Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        {activeIndex === 3 && (
                          <div className="rl_faq6_answer-2">
                            <div className="rl_faq6_answer-wrapper-2">
                              <p className="rl-text-style-regular-3">
                                Yes, as a creator, you have full control over your content. You can delete the bot at any time and request the deletion of all your uploaded content. Your privacy and control over your data are our top priorities. For more detailed information, please refer to our Terms of Use and Privacy Policy.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section><div className="container_1365"></div></section>

        {/* Check out our results section*/}
        <div className="div-block-15">
          <div className="div-block-13">
            <div className="div-block-20">
              <h2 className="heading-4">
                Check out our
                <div className="text-span-3">results</div>
              </h2>
              <p className="paragraph-4 _18">
                See a few examples of our different models
              </p>
            </div>
            <div className="div-block-14">
              <Image
                src="/laptop.png"
                width={500}
                height={300}
                loading="lazy"
                sizes="(max-width: 479px) 361px, (max-width: 767px) 214.046875px, (max-width: 991px) 80vw, (max-width: 1279px) 768px, (max-width: 1439px) 864px, (max-width: 1919px) 943px, 950px"
                alt="A laptop screen"
                className="image-10"
              />
            </div>
          </div>
        </div>

        {/* reviews section*/}
        <section id="Testimonial" className="testimonial">
          <div className="slider-container">
            <div className="slider-wrapper">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : 'blur'}`}
                  aria-label={`${index + 1} of ${testimonials.length}`}
                  role="group"
                >
                  <div className="slide-content-wrapper">
                    <div className="text-block-2">
                      {testimonial.text}
                      <br /><br />
                      <span className="text-span-4">{testimonial.name}</span>
                    </div>
                    <Image
                      src={testimonial.imgSrc}
                      width={50}
                      height={50}
                      loading="lazy"
                      alt={`Testimonial from ${testimonial.name}`}
                      className="image-14"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-left-arrow" onClick={handlePrevious} aria-label="previous slide">
              <Image src="/arrow-left.svg" width={20} height={20} alt="Previous" style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button className="slider-right-arrow" onClick={handleNext} aria-label="next slide">
              <Image src="/arrow-right.svg" width={20} height={20} alt="Next" />
            </button>
          </div>
          <style jsx>{`
        .slide {
          transition: opacity 0.5s ease-in-out;
        }
        .blur {
          filter: blur(4px);
          opacity: 0.5;
        }
        .active {
          filter: none;
          opacity: 1;
        }
      `}
          </style>
        </section>

        {/* form section*/}
        <div className="form">
          <div className="container_1365">
            <div className="div-block-16">
              <div className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="form _1"
                >
                  <img
                    loading="lazy"
                    src="/logo.png"
                    alt="A BoostX sign-up form"
                    className="image-11"
                  />
                  <p className="paragraph-5">
                    Demand is hot! Get on the waiting list by leaving your details below!
                  </p>
                  <input
                    className="text-field w-input"
                    name="name"
                    data-name="Name"
                    placeholder="Name"
                    type="text"
                    id="name"
                    required
                  />
                  <select
                    id="How-many-followers"
                    name="How-many-followers"
                    data-name="How many followers?"
                    required
                    className="select-field w-select"
                  >
                    <option value="">How many followers?</option>
                    <option value="First">New</option>
                    <option value="Second">0-5k</option>
                    <option value="Third">5-10k</option>
                    <option value="Another option">20k+</option>
                  </select>
                  <input
                    className="text-field-2 w-input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    id="email"
                    required
                  />
                  <input
                    className="text-field-2 w-input"
                    name="email-2"
                    placeholder="Main Social Media Link"
                    type="text"
                    id="email-2"
                  />
                  <textarea
                    id="field"
                    name="field"
                    placeholder=""
                    required
                    className="textarea w-input"
                  ></textarea>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="submit-button w-button"
                    value="Submit"
                  />
                </form>
                <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Email Form success">
                  <div className="text-block-3">Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
          <section className="rl_section_faq6">
            <div className="rl-padding-global-2">
              <div className="rl-container-large-2"></div>
            </div>
          </section>
          <section className="rl_section_faq6-2">
            <div className="rl-padding-global-3">
              <div className="rl-container-large-3"></div>
            </div>
          </section>
        </div>
      </main >

      {/* Footer */}
      <footer className="footer-dark" >
        <div className="container-3">
          <div className="footer-wrapper">
            <a href="#" className="footer-brand w-inline-block">
              <Image
                src="/logoFooter.png"
                loading="lazy"
                width={147}
                height={50}
                sizes="(max-width: 479px) 61vw, 147px"
                alt="BoostX logo alongside the text '#1 Results with BoostX', emphasizing the platform's effectiveness in delivering top-tier results for creators."
              />
            </a>
            <div className="footer-content">
              <div id="w-node-ff1f34c9-aa84-5527-d1f2-67f02037e579-aac9653d" className="footer-block">
                <div className="title-small">Company Information</div>
                <div className="footer-link">
                  Oryx Captial Ltd.&nbsp;
                  <br /><br />
                  Address: 19 Lavele Street,
                  <br />
                  1000 Sofia, Bulgaria
                  <br /><br />
                  VAT: BG207869364
                  <br /><br />
                  Email: creator@boostx.software
                  <br />
                </div>
              </div>

              <div className="footer-block">
                <div className="title-small">About</div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Terms of Service
                </a>
                <a href="#" className="footer-link">
                  Privacy policy
                </a>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
                <a href="#" className="footer-link">
                  AML Policy
                </a>
                <a href="#" className="footer-link">
                  Acceptable Use Policy
                </a>
                <a href="#" className="footer-link">
                  Content Moderation Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-copyright-center">
          All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default HomePage;