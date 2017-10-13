import * as React from 'react';
import * as styles from '../../styles/components-page.scss';

export interface IProps{
}

export interface IState {
}

class AvatarExample extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <div className={styles.example}>
        <h3>Accessibility!</h3>
        <p>
          <span>Accessibility Docs</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <span>
            If you&rsquo;ve ever used the on screen home button on an iPhone or adjusted the font size on something you&rsquo;ve read online, you&rsquo;ve benefited from accessibility-focused design. Web accessibility is important because it allows your applications and content to be consumed by a wider audience. And according to Microsoft, &ldquo;
          </span>
          <span>
            designing for people with permanent disabilities actually results in designs that benefit people universally.
          </span>
          <span>
            &rdquo; In this document, we&rsquo;ll discuss how to build accessible applications. Enjoy!
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <strong style={{ fontWeight: 'bold' }}>
            <span>FAQ:</span>
          </strong>
        </p>
      <ol>
      <li><span> Are there any examples of accessible websites? What do you look for?</span></li>
      <li><span> What are some useful tools to evaluate and build accessible apps?</span></li>
      <li><span> What are aria attributes and how do I use them? Is there anything else I should keep in mind?</span></li>
      </ol>
      <p>&nbsp;</p>
      <p><strong style={{ fontWeight: 'bold' }}><span>Code Examples:</span></strong></p>
      <ol>
        <li><span> What are the best practices for accessibility with React? (passing down props)</span></li>
        <li><span> How to use css for reading directions? (use the thing the chip did)</span></li>
        <li><span> List example? using role, and examples of other roles</span></li>
        <li><span> using aria-live. When to use and examples of differences</span></li>
        <li><span> using aria-hidden</span></li>
        <li><span> using aria-expanded</span></li>
        </ol>
        <p>&nbsp;</p>
      <ol>
        <li><strong style={{ fontWeight: 'bold' }}><span>
          Are there any examples of accessible websites? What do you look for?
        </span></strong></li>
      </ol>
      <p><span>Yes! Here are a few:</span></p>
      <p><a href="https://www.cdc.gov/"><span>https://www.cdc.gov/</span></a></p>
      <p><a href="https://www.mozilla.org/en-US/"><span>https://www.mozilla.org/en-US/</span></a></p>
      <p><a href="https://usa.gov/"><span>https://usa.gov/</span></a></p>
      <p><a href="http://accessiblewebsitedesignexamples.com/"><span>http://accessiblewebsitedesignexamples.com/</span></a></p>
      <p><a href="http://www.upenn.edu/"><span>http://www.upenn.edu/</span></a></p>
      <p><span>(Government websites are required to follow Web Content Accessibility Guidelines (WCAG), so they&rsquo;re usually a pretty safe bet.)</span></p>
      <p>&nbsp;</p>
      <p><span>When determining accessibility for static websites, you generally want to make sure the basics are covered. Are they using traditional HTML elements? Do their image tags have alt attributes? Are color contrasts manageable? Can you do use a keyboard to do everything you&rsquo;d need to do without a mouse? If there are icons, are there corresponding labels? Is there a clear indication when an element is focused?</span></p>
      <p>&nbsp;</p>
      <p><span>Generally speaking, if your static web page is built using semantic HTML elements and straightforward design, you&rsquo;ve probably met roughly 90 percent of the requirements. If you are building a more complicated application (or are particularly ambitious), sometimes straightforward HTML elements won&rsquo;t get you the functionality you need. </span></p>
      <p>&nbsp;</p>
      <p><span>WCAG is one of the most traditional accessibility standards. There are four overarching guidelines and three levels of compliance. For the sake of brevity and because others said it better, I&rsquo;ll link to someone else&rsquo;s cheat sheet (</span><a href="https://bitsofco.de/the-accessibility-cheatsheet/"><span>https://bitsofco.de/the-accessibility-cheatsheet/</span></a><span>). </span></p>
      <p>&nbsp;</p>
      <ol>
        <li><strong style={{ fontWeight: 'bold' }}><span> What are some useful tools to evaluate and build accessible apps?</span></strong></li>
      </ol>
      <ul>
        <li><span>Website evaluation tool: </span><a href="http://wave.webaim.org/"><span>http://wave.webaim.org/</span></a></li>
        <li><span> Screen readers: </span></li>
        <li><span> VoiceOver for Mac, </span></li>
        <li><a href="https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"><span>ChromeVox</span></a><span> for Chrome, </span></li>
        <li><a href="http://www.freedomscientific.com/Products/Blindness/JAWS"><span>JAWS</span></a><span> for Windows (not free, but probably the most used. To be fair, if you&rsquo;re blind you&rsquo;re probably willing to pay for a good one)</span></li>
        <li><a href="https://www.nvaccess.org/"><span>NVDA</span></a><span> for Windows is probably the best free JAWS alternative</span></li>
      </ul>
      <p><span>If you&rsquo;re a web developer who tests websites with different browsers, be aware that screen readers also slightly differ from one another. And if you&rsquo;re in for a real challenge, try to use your screen reader-enabled computer blindfolded.</span></p>
      <p>&nbsp;</p>
      <ol>
        <li><strong style={{ fontWeight: 'bold' }}><span> What are aria roles and attributes and how do I use them?</span></strong></li>
      </ol>
      <p>
        <span>ARIA is a set of attributes that help make web content and applications more accessible. They </span><em><span>do not </span></em><span>change an application&rsquo;s look or functionality, but they&rsquo;re very useful for specifying how you&rsquo;d like a screen reader to interact with your application. </span>
        <span>Here are some useful things to know:</span>
      </p>
      </div>
    );
  }
}

export default AvatarExample;
