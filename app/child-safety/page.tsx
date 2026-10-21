import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Child Safety & Protection Policy - My Loving Day',
  description: 'Child Safety and Protection Policy for My Loving Day application and services.',
};

export default function ChildSafetyPolicyPage() {
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
            Child Safety &amp; Protection Policy
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: '#334155',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            At My Loving Day, we are committed to maintaining a safe, respectful,
            and secure environment for all users. We prioritize child safety and
            protection across all our digital platforms and services.
          </p>
        </div>

        {/* Section 1 */}
        <div className="policy-section">
          <h2>1. Our Commitment to Child Safety</h2>
          <p>
            At My Loving Day, we are committed to maintaining a safe and respectful
            environment for all users. We take Child Sexual Abuse and Exploitation
            (CSAE) seriously and strictly prohibit any content, behavior, or
            activity that exploits, harms, or endangers children.
          </p>
          <p>
            We are committed to taking appropriate action against violations of
            this policy and cooperating with relevant authorities when required.
          </p>
        </div>

        {/* Section 2 */}
        <div className="policy-section">
          <h2>2. Age Restrictions</h2>
          <p>
            My Loving Day is intended for users who meet the minimum age
            requirements applicable to our platform and relevant laws.
          </p>
          <ul>
            <li>
              Users must comply with the platform’s age requirements and
              applicable terms of service.
            </li>
            <li>
              Parents and legal guardians are encouraged to supervise children&apos;s
              online activities where appropriate.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts that violate
              our age requirements or pose a risk to child safety.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="policy-section">
          <h2>3. Prohibited Content and Activities</h2>
          <p>My Loving Day strictly prohibits:</p>
          <ul>
            <li>
              Child sexual abuse material (CSAM) or any content that sexually
              exploits or endangers children.
            </li>
            <li>
              Sexualization of minors, grooming, or attempts to engage children
              in inappropriate activities.
            </li>
            <li>
              The sharing, solicitation, or distribution of content involving
              child abuse or exploitation.
            </li>
            <li>
              Threats, harassment, or any other behavior that places children at
              risk of harm.
            </li>
            <li>
              Any attempt to use the platform to facilitate child exploitation or
              abuse.
            </li>
          </ul>
          <p>
            Content or accounts found to violate these rules may be removed,
            restricted, or permanently suspended. Suspected illegal activity will
            be reported to the appropriate authorities when required by applicable
            law.
          </p>
        </div>

        {/* Section 4 */}
        <div className="policy-section">
          <h2>4. Reporting and Moderation</h2>
          <p>
            We encourage users to report any content, account, or activity that may
            involve child abuse, exploitation, or a threat to a child&apos;s
            safety.
          </p>
          <ul>
            <li>
              <strong>Reporting Concerns:</strong> Users can contact our support
              team to report suspected violations of this policy.
            </li>
            <li>
              <strong>Review and Investigation:</strong> Reports will be reviewed,
              and appropriate action will be taken based on the nature and
              severity of the concern.
            </li>
            <li>
              <strong>Enforcement:</strong> Violating content may be removed, and
              responsible accounts may be suspended or permanently terminated.
            </li>
            <li>
              <strong>Escalation:</strong> Suspected child exploitation or abuse
              will be escalated to the appropriate authorities or child protection
              organizations where required.
            </li>
          </ul>
          <p>
            We do not tolerate the use of My Loving Day to promote, facilitate, or
            conceal child abuse or exploitation.
          </p>
        </div>

        {/* Section 5 */}
        <div className="policy-section">
          <h2>5. User Safety and Privacy</h2>
          <p>
            My Loving Day is committed to protecting users&apos; privacy and
            supporting a safe online experience.
          </p>
          <ul>
            <li>
              <strong>Account Safety:</strong> We may take appropriate action
              against fraudulent accounts, impersonation, or accounts involved in
              harmful activity.
            </li>
            <li>
              <strong>Personal Information:</strong> Users should avoid sharing
              sensitive personal information publicly or with untrusted
              individuals.
            </li>
            <li>
              <strong>Privacy Protection:</strong> Personal information is handled
              in accordance with our Privacy Policy and applicable data protection
              laws.
            </li>
            <li>
              <strong>Safety Enforcement:</strong> We reserve the right to
              investigate reported policy violations and take appropriate action
              to protect users.
            </li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="policy-section">
          <h2>6. Compliance with Applicable Laws and Platform Policies</h2>
          <p>
            My Loving Day is committed to complying with applicable child
            protection laws and relevant platform requirements, including
            applicable Google Play and Apple App Store child safety policies.
          </p>
          <p>
            Where applicable, we will follow relevant legal obligations concerning
            the prevention, handling, and reporting of child sexual abuse and
            exploitation.
          </p>
        </div>

        {/* Section 7 */}
        <div className="policy-section">
          <h2>7. Cooperation with Authorities</h2>
          <p>
            My Loving Day will cooperate with relevant law enforcement agencies and
            child protection authorities in accordance with applicable laws and
            legal obligations concerning suspected child abuse and exploitation.
          </p>
        </div>

        {/* Section 8 */}
        <div className="policy-section">
          <h2>8. Contact for Child Safety Concerns</h2>
          <p>
            If you have questions, concerns, or reports relating to child safety on
            My Loving Day, please contact our support team:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:support@mylovingday.com"
                style={{
                  color: '#024BA4',
                  fontWeight: 600,
                  textDecoration: 'underline',
                }}
              >
                support@mylovingday.com
              </a>
            </li>
          </ul>
          <p>
            Please include relevant details about your concern so our team can
            review the matter appropriately. Do not send or redistribute illegal
            child sexual abuse material.
          </p>
        </div>

        {/* Section 9 */}
        <div className="policy-section">
          <h2>9. Policy Updates</h2>
          <p>
            My Loving Day reserves the right to update this Child Safety &amp;
            Protection Policy when necessary to reflect changes in our practices,
            applicable laws, or platform requirements. Updates will be published
            with a revised “Last Updated” date.
          </p>
          <p>
            Our goal is to maintain a safe, respectful, and responsible environment
            and to take child safety concerns seriously.
          </p>
        </div>
      </div>
    </div>
  );
}
