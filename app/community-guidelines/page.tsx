import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Guidelines - My Loving Day',
  description: 'Community Guidelines for My Loving Day application and services.',
};

export default function CommunityGuidelinesPage() {
  return (
    <div
      className="legal-page-wrapper"
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        paddingTop: '200px',
        paddingBottom: '80px',
      }}
    >
      <div className="container-custom" style={{ maxWidth: '960px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#000000',
              marginBottom: '16px',
            }}
          >
            Community Guidelines
          </h1>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 800,
              color: '#024BA4',
              marginBottom: '14px',
            }}
          >
            Building a Friendly, Meaningful, and Safe Meeting Place
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#334155',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            Our intention is to create a community that inspires and supports, that honours
            and deepens our sense of purpose and connection. Life is a blessing, for however
            long we may be here, this community gives the opportunity to create a lasting
            legacy that continues even after we have left.
          </p>
          <p
            style={{
              fontSize: '17px',
              color: '#334155',
              lineHeight: 1.8,
            }}
          >
            And just like a great gathering, social media is best when everyone feels welcome,
            safe, and part of the group. These guidelines are here to help keep the vibes
            elevated. By hanging out here, you agree to play by these simple rules.
          </p>
        </div>

        {/* Section 1 */}
        <div className="policy-section">
          <h2>1. Have Respect</h2>
          <ul>
            <li>
              <strong>Be Kind:</strong> Whether you totally agree or couldn&apos;t disagree more,
              treat everyone like a friend. Name-calling, mean jokes, hate speech, bullying, or
              anything of the like are not welcome—let’s keep it light!
            </li>
            <li>
              <strong>No Haters:</strong> There’s no room for hate, discrimination, or negativity
              based on anyone’s identity.
            </li>
            <li>
              <strong>No Trolling:</strong> If your goal is to upset people, this isn&apos;t the
              space to be. We&apos;re here to spread joy and awareness.
            </li>
            <li>
              <strong>Celebrate Differences:</strong> Our variety makes life memorable! Respect
              different cultures, opinions, and traditions—who knows, you might learn something
              about yourself in the process.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="policy-section">
          <h2>2. Foster Safety</h2>
          <ul>
            <li>
              <strong>Keep It Private:</strong> Don’t overshare personal details—some things are
              best kept secret.
            </li>
            <li>
              <strong>See Something Weird?</strong> If you spot anything unsafe or out of line,
              our team is here to help, let us know!
            </li>
            <li>
              <strong>Let’s Uplift:</strong> Posts that encourage harm or dangerous behaviour are
              a big no-no. We want everyone to feel their best.
            </li>
            <li>
              <strong>Kids Come First:</strong> Anything that puts children at risk is strictly
              forbidden. We’ll act fast to keep everyone safe.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="policy-section">
          <h2>3. Be Real</h2>
          <ul>
            <li>
              <strong>No Spam, Thanks:</strong> Keep the conversation interesting—nobody likes
              endless ads or copy-paste spam, bulk messages, and please no excessive posting of
              self promotional materials.
            </li>
            <li>
              <strong>Truth Matters:</strong> Double-check your facts before sharing.
              Misinformation ruins things for everyone.
            </li>
            <li>
              <strong>Be Yourself:</strong> Pretending to be someone you’re not, or impersonating
              others is forbidden.
            </li>
            <li>
              <strong>Play Fair:</strong> Don’t use sneaky tricks to boost your likes or followers.
              Let your creativity shine on its own!
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="policy-section">
          <h2>4. Respect Creativity</h2>
          <ul>
            <li>
              <strong>Share What’s Yours:</strong> Only post what you own or have permission to
              share—plagiarism is never in style. No sharing of pirated material. Content must not
              infringe on any third party rights, privacy rights, or trademarks.
            </li>
            <li>
              <strong>Source Crediting:</strong> If you’re sharing someone else’s work, give
              credit for the original source.
            </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="policy-section">
          <h2>5. Play by the Book</h2>
          <ul>
            <li>
              <strong>Follow the Law:</strong> Don’t post anything illegal or encourage others to
              break the law—no one wants to get in trouble here.
            </li>
            <li>
              <strong>No explicit content:</strong> Posting adult, explicit, sexually conspicuous,
              NSFW, or promoting links to any such content is not permitted.
            </li>
            <li>
              <strong>Abide by Platform Policies:</strong> These are guidelines and are not all
              encompassing, if we find you in violation we will take action.
            </li>
            <li>
              <strong>No Shady Business:</strong> Don’t help others break the law, either. Let’s
              keep it above board.
            </li>
            <li>
              <strong>Stay secure:</strong> Use a strong password and guard your login, if
              something feels off about your account, let us know right away!
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="policy-section">
          <h2>6. Look Out for Each Other</h2>
          <ul>
            <li>
              <strong>Protect Young Users:</strong> Keep things age-appropriate and never target
              minors inappropriately. Safety first!
            </li>
            <li>
              <strong>Show Compassion:</strong> If someone’s having a tough time, be kind.
              Encourage them to seek support if they need it.
            </li>
          </ul>
        </div>

        {/* Section 7 */}
        <div className="policy-section">
          <h2>7. Advertising &amp; Promotions</h2>
          <ul>
            <li>
              <strong>Be Honest:</strong> Always label ads and sponsored posts. No sneaky sales
              tactics allowed.
            </li>
            <li>
              <strong>Follow the Rules:</strong> Only run promotions or contests if they’re
              allowed. Multi-level marketing schemes? No, thank you.
            </li>
          </ul>
        </div>

        {/* Section 8 */}
        <div className="policy-section">
          <h2>8. Moderation &amp; Consequences</h2>
          <ul>
            <li>
              <strong>Our Team’s Got Your Back:</strong> We use tools and real people to keep
              things running smoothly. If something breaks the rules, we’ll take action.
            </li>
            <li>
              <strong>Fair Play:</strong> Break the guidelines, and you might get a warning, a
              time-out, or even be shown the door (banned!).
            </li>
            <li>
              <strong>Appeal If You Need To:</strong> If you think we made a mistake, you can ask
              us to take another look.
            </li>
          </ul>
        </div>

        {/* Section 9 */}
        <div className="policy-section">
          <h2>9. Growing Together</h2>
          <ul>
            <li>
              <strong>Your Voice Matters:</strong> We listen to your suggestions and regularly
              update these guidelines. Help us make this community better!
            </li>
            <li>
              <strong>Keep Up to Date:</strong> Check back from time to time for any updates or new
              tips.
            </li>
          </ul>
        </div>

        {/* Closing Section */}
        <div className="policy-section" style={{ marginTop: '36px' }}>
          <h2>Remember to smile and make every day great</h2>
          <p>
            Let’s make this a corner of the world where everyone feels at home. Where we create
            space for each other with intention. Follow these guidelines, be excellent, and enjoy
            being part of our community!
          </p>
        </div>
      </div>
    </div>
  );
}
