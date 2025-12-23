import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './TermsPage.css';

const PrivacyPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <Link to="/" className="terms-back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="terms-date">Last Updated: December 22, 2025</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Introduction and Scope</h2>
          <p>
            This Privacy Policy ("Policy") describes how IntelliMoose, Inc., a Delaware corporation ("IntelliMoose," "Company," "we," "us," or "our"), collects, uses, processes, stores, discloses, transfers, and protects personal information and other data obtained from users ("you," "your," or "User") in connection with your access to and use of our website, platform, services, applications, and related products and services, including but not limited to FixMoose (job management and customer relationship management platform), VoiceMoose (voice-to-documentation artificial intelligence tool), SnapMoose (computer vision-based code compliance verification tool), and EyeMoose (video-based safety monitoring system) (collectively, the "Services"). This Policy applies to all information collected through the Services, as well as any related services, sales, marketing, events, communications, and interactions with IntelliMoose, Inc., whether online or offline. By accessing, browsing, registering for, subscribing to, downloading, installing, or otherwise using the Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy and consent to our collection, use, processing, storage, disclosure, and transfer of your information as described herein. If you do not agree with the terms and practices described in this Policy, you must immediately discontinue all use of the Services and must not access, browse, or interact with the Services in any manner.
          </p>
          <p>
            This Policy is incorporated into and made a part of our Terms of Service. Any capitalized terms used but not defined in this Policy shall have the meanings ascribed to them in the Terms of Service. We reserve the right, in our sole and absolute discretion, to modify, amend, update, revise, or replace this Privacy Policy at any time and for any reason, with or without prior notice to you. Any changes to this Policy will become effective immediately upon posting of the revised Policy on our website, and the "Last Updated" date at the top of this Policy will be revised to reflect the date of the most recent changes. Your continued use of the Services following the posting of any changes constitutes your acceptance of such changes and your agreement to be bound by the revised Policy. It is your responsibility to review this Policy periodically to stay informed of any updates or modifications. We will not provide individual notice of changes to this Policy, and you waive any right to receive specific notice of such changes.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Information We Collect</h2>
          <p>
            We collect various types of information from and about users of the Services, including information by which you may be personally identified or which may be used to contact or identify you ("Personal Information"), as well as information that does not directly identify you but may be associated with your account, device, or usage patterns. The categories of information we collect include, but are not limited to, the following:
          </p>
          <p>
            <strong>2.1 Account Registration Information.</strong> When you create an account to use the Services, we collect information that you provide directly to us, including but not limited to your full legal name, business name (if applicable), email address, telephone number, physical mailing address, billing address, company name, job title, industry, trade specialty, license numbers, certification information, tax identification numbers, payment method information (credit card number, expiration date, CVV code, billing zip code), and any other information you choose to provide during the registration or account setup process.
          </p>
          <p>
            <strong>2.2 VoiceMoose Data Collection.</strong> When you use VoiceMoose voice-to-documentation services, we collect and process audio recordings of your voice, speech patterns, spoken words, and verbal communications. Audio data is temporarily captured and stored on your mobile device during the recording session and may be transmitted to our cloud servers or third-party artificial intelligence service providers (including but not limited to Anthropic Claude API, OpenAI Whisper API, or other speech recognition and natural language processing services) for transcription, analysis, interpretation, and conversion into structured text and data. The transcribed text may include descriptions of work performed, materials used, labor hours, customer information, job site details, pricing information, and any other information you verbally communicate while using the VoiceMoose service. Audio recordings are typically deleted from our servers within twenty-four (24) to seventy-two (72) hours after transcription is complete, but transcribed text and extracted data may be retained indefinitely in your FixMoose account and associated with your customer records, job records, invoices, and other business documents. We may retain sample audio recordings for quality assurance, model training, product improvement, debugging, and compliance purposes.
          </p>
          <p>
            <strong>2.3 SnapMoose Data Collection.</strong> When you use SnapMoose code compliance verification services, we collect and process photographic images and visual data captured using your mobile device camera, including photographs of electrical panels, circuit breakers, wiring, outlets, junction boxes, conduit, grounding systems, plumbing installations, pipe configurations, fixtures, vents, traps, cleanouts, and any other physical installations or components related to building code compliance. Images are processed using on-device computer vision models (including but not limited to YOLOv8 object detection models, TensorFlow Lite models, and other machine learning models) and may also be transmitted to cloud-based artificial intelligence services (including but not limited to GPT-4 Vision API, Claude Vision API, or other image analysis services) for enhanced detection, classification, and analysis of code violations, safety hazards, and compliance issues. Photographs and analysis results are stored in your FixMoose account and associated with specific jobs, customers, and inspection records. We may retain images and analysis results indefinitely for documentation, compliance, quality assurance, dispute resolution, model training, and product improvement purposes.
          </p>
          <p>
            <strong>2.4 EyeMoose Data Collection.</strong> When you use EyeMoose job site safety monitoring services, we collect and process video footage, video clips, motion detection data, object detection results, and audio recordings captured by EyeMoose camera hardware installed at your job site or business location. Video data is processed using on-site edge computing devices (including but not limited to Raspberry Pi computers, Google Coral TPU accelerators, or other local processing hardware) running computer vision models designed to detect personal protective equipment (PPE) usage, safety violations, hazardous conditions, unauthorized access, worker movements, and incident events. When a violation, incident, or alert condition is detected, video clips (typically five to thirty seconds in duration) are saved and may be transmitted to cloud storage and your FixMoose dashboard for review, reporting, and compliance documentation. Continuous video footage is not permanently stored; only event-triggered clips are retained. Video clips and incident data may be retained for thirty (30) days to twelve (12) months depending on your subscription plan and regulatory requirements, after which they may be automatically deleted unless flagged for long-term retention due to incidents, claims, investigations, or legal holds.
          </p>
          <p>
            <strong>2.5 Business and Transactional Information.</strong> We collect information related to your use of the FixMoose platform and your business operations, including but not limited to customer names, customer contact information, customer addresses, job descriptions, work orders, quotes, estimates, invoices, payment records, purchase orders, supplier information, vendor details, material lists, equipment inventories, employee information, subcontractor details, project timelines, scheduling data, communication logs, notes, comments, task lists, checklists, compliance records, permit information, inspection reports, warranty documents, contracts, change orders, expense receipts, mileage logs, time tracking data, and any other business-related information you input, upload, generate, or store using the Services.
          </p>
          <p>
            <strong>2.6 Technical and Usage Information.</strong> We automatically collect certain technical information when you access or use the Services, including but not limited to your Internet Protocol (IP) address, device identifiers (including device ID, advertising ID, IMEI, MAC address), browser type and version, operating system type and version, mobile network information, device manufacturer and model, screen resolution, time zone setting, browser plug-in types and versions, app version, unique device identifiers, log-in times, access times, session duration, pages visited, features used, clicks, scrolls, navigation paths, referring URLs, exit pages, search queries, cookie data, pixel tag data, web beacon data, flash object data, local storage data, and other diagnostic data, usage statistics, and metadata related to your interactions with the Services.
          </p>
          <p>
            <strong>2.7 Location Information.</strong> We collect precise and approximate geographic location information derived from your device GPS sensors, Wi-Fi access points, cellular tower triangulation, IP address geolocation, and manual location entries. Location data may be collected when you use the Services to associate jobs with specific addresses, optimize routing and scheduling, verify job site attendance, track mileage for expense and tax reporting purposes, detect local code amendments and jurisdictional requirements, and provide location-based features and services.
          </p>
          <p>
            <strong>2.8 Communications and Correspondence.</strong> We collect the content, metadata, and related information from any communications, messages, emails, text messages, phone calls, voicemails, chat messages, support tickets, feedback, complaints, inquiries, comments, reviews, testimonials, or other correspondence you send to us or exchange with us through any channel or medium, including information about your interactions with our customer support team, sales team, technical support team, and other company representatives.
          </p>
          <p>
            <strong>2.9 Cookies, Tracking Technologies, and Analytics.</strong> We and our third-party service providers, partners, advertisers, and analytics providers use cookies, web beacons, pixel tags, local storage objects, session storage, embedded scripts, device fingerprinting, and other tracking technologies to automatically collect information about your browsing behavior, preferences, interactions, and usage patterns across the Services and across other websites and online services over time. This information may include pages viewed, links clicked, time spent on pages, mouse movements, scrolling activity, typing patterns, form field interactions, error messages, performance metrics, and other analytical data used for analytics, advertising, personalization, fraud detection, security, and optimization purposes.
          </p>
          <p>
            <strong>2.10 Third-Party and Publicly Available Information.</strong> We may collect information about you from third-party sources, including but not limited to data brokers, marketing partners, social media platforms, public databases, credit bureaus, identity verification services, business information providers, government agencies, professional licensing boards, contractor directories, trade associations, and other external sources. This information may be combined with information we collect directly from you to verify your identity, assess creditworthiness, prevent fraud, comply with legal obligations, enhance our services, personalize your experience, and conduct business research and analysis.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect for various business, operational, commercial, research, development, analytical, and legal purposes, including but not limited to the following:
          </p>
          <p>
            <strong>3.1 Service Provision and Performance.</strong> To provide, operate, maintain, deliver, perform, and administer the Services; to create and manage your account; to process transactions and payments; to fulfill your requests and orders; to enable the features and functionality of the Services; to provide customer support and respond to inquiries; to communicate with you about your account, transactions, updates, and service-related announcements; and to otherwise deliver the services and perform the functions for which you have engaged us.
          </p>
          <p>
            <strong>3.2 Artificial Intelligence Processing and Analysis.</strong> To process audio, image, video, and text data using artificial intelligence, machine learning, natural language processing, computer vision, speech recognition, predictive analytics, and other advanced technologies; to train, develop, improve, test, validate, and optimize our AI models and algorithms; to generate transcriptions, summaries, insights, recommendations, predictions, classifications, and automated outputs; to detect patterns, anomalies, violations, risks, and opportunities; and to provide AI-powered features and intelligent automation throughout the Services.
          </p>
          <p>
            <strong>3.3 Product Development and Improvement.</strong> To analyze usage patterns, user behavior, feature adoption, and performance metrics; to conduct research and development; to test new features and functionality; to identify bugs, errors, and technical issues; to optimize performance, reliability, and user experience; to develop new products, services, and offerings; and to improve, enhance, and innovate our existing Services.
          </p>
          <p>
            <strong>3.4 Personalization and Customization.</strong> To personalize and customize your experience with the Services; to provide content, recommendations, features, and communications tailored to your preferences, interests, usage history, and business needs; to remember your settings, preferences, and saved information; and to deliver targeted and relevant experiences across devices and sessions.
          </p>
          <p>
            <strong>3.5 Marketing, Advertising, and Promotional Communications.</strong> To send you marketing communications, promotional offers, newsletters, product updates, event invitations, surveys, and other commercial messages via email, SMS, push notifications, in-app messages, phone calls, direct mail, and other channels; to display personalized advertisements and sponsored content; to conduct marketing campaigns and promotional activities; to analyze the effectiveness of our marketing efforts; and to market and promote our Services and those of our partners. You may opt out of marketing communications as described in Section 8 below.
          </p>
          <p>
            <strong>3.6 Analytics and Business Intelligence.</strong> To conduct data analysis, statistical analysis, trend analysis, and business intelligence; to generate reports, dashboards, and metrics related to usage, performance, revenue, customer behavior, market trends, and business operations; to understand our customer base and market segments; to evaluate business performance and strategy; and to make data-driven business decisions.
          </p>
          <p>
            <strong>3.7 Security, Fraud Prevention, and Risk Management.</strong> To detect, prevent, investigate, and respond to fraud, unauthorized access, security incidents, cyberattacks, policy violations, terms of service violations, illegal activities, and other harmful or malicious conduct; to verify identity and authenticate users; to protect the security, integrity, and availability of the Services; to enforce our agreements, policies, and legal rights; and to manage risk and liability.
          </p>
          <p>
            <strong>3.8 Legal Compliance and Obligations.</strong> To comply with applicable laws, regulations, legal processes, governmental requests, court orders, subpoenas, warrants, and other legal obligations; to respond to lawful requests from public authorities and law enforcement agencies; to establish, exercise, or defend legal claims; to protect our rights, property, safety, and interests and those of our users and third parties; and to fulfill our contractual, regulatory, and fiduciary duties.
          </p>
          <p>
            <strong>3.9 Business Transactions and Corporate Activities.</strong> To facilitate, evaluate, negotiate, and complete business transactions such as mergers, acquisitions, divestitures, reorganizations, bankruptcies, dissolutions, asset sales, financing transactions, joint ventures, partnerships, and other corporate transactions and strategic activities, which may involve the transfer, sale, or disclosure of your information to prospective or actual purchasers, investors, lenders, advisors, and other parties involved in such transactions.
          </p>
          <p>
            <strong>3.10 Aggregated and De-Identified Data.</strong> To create aggregated, anonymized, pseudonymized, and de-identified data sets and statistical information that do not identify you personally, which we may use for any purpose including research, product development, benchmarking, industry analysis, marketing, and disclosure to third parties without restriction.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We may share, disclose, transfer, sell, license, or otherwise make available your information to third parties in the following circumstances and for the following purposes:
          </p>
          <p>
            <strong>4.1 Service Providers and Vendors.</strong> We share information with third-party service providers, vendors, contractors, consultants, and business partners who perform services on our behalf or assist us in operating the Services, including but not limited to cloud hosting providers (Amazon Web Services, Google Cloud Platform, Microsoft Azure), artificial intelligence and machine learning service providers (Anthropic, OpenAI, Google), payment processors (Stripe, PayPal), email service providers, SMS gateways, analytics providers (Google Analytics, Mixpanel), customer relationship management platforms, data storage providers, content delivery networks, security and fraud prevention services, identity verification services, marketing and advertising platforms, and other technology and business service providers. These third parties may have access to your information only to perform tasks on our behalf and are contractually obligated to protect your information and use it only for the purposes for which it was disclosed, though we cannot guarantee their compliance and are not responsible for their actions or failures.
          </p>
          <p>
            <strong>4.2 Business Partners and Affiliates.</strong> We may share information with our business partners, affiliates, subsidiaries, parent companies, joint ventures, and other entities under common control or ownership for purposes consistent with this Privacy Policy, including marketing, product development, analytics, and business operations.
          </p>
          <p>
            <strong>4.3 Advertising and Marketing Partners.</strong> We may share information with advertising networks, marketing platforms, data brokers, and other third parties for targeted advertising, interest-based advertising, cross-device tracking, audience segmentation, attribution analysis, and marketing purposes.
          </p>
          <p>
            <strong>4.4 Legal and Regulatory Compliance.</strong> We may disclose information when we believe in good faith that disclosure is necessary to comply with applicable laws, regulations, legal processes, governmental requests, court orders, subpoenas, warrants, or other legal obligations; to respond to lawful requests from public authorities including law enforcement, regulatory agencies, and national security agencies; to enforce our Terms of Service, policies, and agreements; to investigate potential violations; to protect our rights, property, safety, and interests and those of our users and the public; to detect, prevent, or address fraud, security, or technical issues; and to otherwise fulfill our legal, regulatory, and contractual obligations.
          </p>
          <p>
            <strong>4.5 Business Transactions.</strong> In connection with any merger, acquisition, divestiture, restructuring, reorganization, dissolution, bankruptcy, sale of assets, financing, joint venture, or other business transaction or negotiation, we may transfer, sell, or assign your information to the acquiring, purchasing, or successor entity, and such entity may use your information in accordance with this Privacy Policy or as otherwise disclosed to you at the time of the transaction.
          </p>
          <p>
            <strong>4.6 With Your Consent or At Your Direction.</strong> We may share your information with third parties when you provide your consent, authorization, or direction to do so, including when you choose to share information through integrations, third-party applications, social media platforms, or other services.
          </p>
          <p>
            <strong>4.7 Aggregated and De-Identified Data.</strong> We may share aggregated, anonymized, pseudonymized, and de-identified information that does not personally identify you with third parties for any purpose without restriction, including for research, analysis, benchmarking, marketing, and commercial purposes.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods vary depending on the type of information, the purpose for which it was collected, legal and regulatory requirements, contractual obligations, business needs, and other factors. Specific retention practices include:
          </p>
          <p>
            <strong>5.1 Account and Profile Information.</strong> We retain account information, registration data, and profile information for the duration of your active account and for a reasonable period thereafter (typically seven (7) years) to comply with legal obligations, resolve disputes, enforce agreements, and maintain business records.
          </p>
          <p>
            <strong>5.2 Audio Recordings (VoiceMoose).</strong> Audio recordings are typically deleted within twenty-four (24) to seventy-two (72) hours after transcription, but may be retained longer for quality assurance, dispute resolution, legal compliance, model training, and product improvement purposes.
          </p>
          <p>
            <strong>5.3 Transcribed Text and Extracted Data.</strong> Transcribed text, extracted data, and structured information derived from audio recordings are retained indefinitely as part of your business records, job documentation, invoices, and customer records.
          </p>
          <p>
            <strong>5.4 Images and Analysis Results (SnapMoose).</strong> Photographs, images, and code compliance analysis results are retained indefinitely for documentation, compliance verification, quality assurance, dispute resolution, legal protection, and historical reference.
          </p>
          <p>
            <strong>5.5 Video Clips and Incident Data (EyeMoose).</strong> Video clips and incident data are retained for thirty (30) days to twelve (12) months depending on your subscription plan, regulatory requirements, and flagging for incidents, claims, investigations, or legal holds.
          </p>
          <p>
            <strong>5.6 Financial and Transaction Records.</strong> Financial records, payment information, transaction data, invoices, receipts, and related documentation are retained for a minimum of seven (7) years to comply with tax laws, accounting standards, and financial regulations.
          </p>
          <p>
            <strong>5.7 Communications and Support Records.</strong> Communications, support tickets, inquiries, and correspondence are retained for up to three (3) years for quality assurance, training, dispute resolution, and customer service improvement purposes.
          </p>
          <p>
            <strong>5.8 Logs and Technical Data.</strong> Server logs, access logs, usage logs, error logs, and technical diagnostic data are typically retained for ninety (90) days to one (1) year for security monitoring, troubleshooting, performance optimization, and legal compliance purposes.
          </p>
          <p>
            When information is no longer needed for the purposes described in this Policy and is not subject to legal retention requirements, we will delete, anonymize, or de-identify such information using commercially reasonable methods. However, we cannot guarantee complete or secure deletion of all data, and residual copies may persist in backup systems, archives, and other storage locations.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Security</h2>
          <p>
            We implement and maintain reasonable administrative, technical, and physical security measures designed to protect your information from unauthorized access, use, disclosure, alteration, destruction, and loss. These measures include but are not limited to encryption of data in transit and at rest using industry-standard protocols (including AES-256 encryption, TLS 1.2 or higher), secure server infrastructure, firewalls, intrusion detection and prevention systems, access controls and authentication mechanisms, regular security assessments and vulnerability testing, employee training and background checks, incident response procedures, and compliance with security standards and frameworks. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security. You acknowledge and accept that any transmission of information is at your own risk, and we disclaim all liability for unauthorized access, security breaches, data loss, data corruption, and other security incidents. You are responsible for maintaining the confidentiality of your account credentials, passwords, and authentication factors, and you agree to notify us immediately of any unauthorized access to or use of your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Your Rights and Choices</h2>
          <p>
            Depending on your location and applicable laws, you may have certain rights regarding your personal information, which may include the right to access, correct, update, delete, restrict processing, object to processing, port data, withdraw consent, and opt out of certain uses and disclosures. To exercise any of these rights, please contact us using the contact information provided in Section 12 below. We will respond to your request in accordance with applicable law, but we reserve the right to verify your identity, request additional information, charge reasonable fees, deny requests in certain circumstances, and take other actions permitted by law. Your rights may be limited or denied based on legal exceptions, business requirements, conflicting obligations, technical limitations, and other factors.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Marketing Communications and Opt-Out</h2>
          <p>
            You may opt out of receiving marketing and promotional communications from us by following the unsubscribe instructions included in such communications, by adjusting your account settings and communication preferences, or by contacting us using the information provided in Section 12 below. Please note that even if you opt out of marketing communications, we may still send you transactional, administrative, and service-related communications regarding your account, subscriptions, transactions, and use of the Services, which you cannot opt out of without terminating your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Third-Party Services and Links</h2>
          <p>
            The Services may contain links to, integrations with, or connections to third-party websites, applications, platforms, services, and content that are not owned, operated, or controlled by IntelliMoose, Inc. We are not responsible for the privacy practices, data collection methods, security measures, content, or conduct of any third parties. This Privacy Policy does not apply to third-party services, and we encourage you to review the privacy policies and terms of service of any third-party services you access, use, or interact with. Your use of third-party services is at your own risk, and we disclaim all liability for any damages, losses, or harms arising from or related to third-party services.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Children's Privacy</h2>
          <p>
            The Services are not intended for, directed to, or designed to attract individuals under the age of eighteen (18) years old (or the age of majority in your jurisdiction, whichever is higher). We do not knowingly collect, use, or disclose personal information from children. If we become aware that we have collected personal information from a child without appropriate parental consent, we will take steps to delete such information. If you believe that we have collected information from a child, please contact us immediately using the contact information provided in Section 12 below.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to, processed in, and stored in countries other than your country of residence, including the United States and other jurisdictions where data protection laws may differ from and may be less protective than the laws of your jurisdiction. By using the Services, you consent to the transfer of your information to the United States and other countries for the purposes described in this Privacy Policy. We will take appropriate measures to ensure that your information receives an adequate level of protection in accordance with applicable law, which may include implementing Standard Contractual Clauses, relying on adequacy decisions, obtaining your consent, or using other lawful transfer mechanisms.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Contact Information</h2>
          <p>
            If you have any questions, comments, concerns, or complaints regarding this Privacy Policy, our privacy practices, or our handling of your information, or if you wish to exercise your privacy rights, please contact us at:
          </p>
          <p>
            IntelliMoose, Inc.<br />
            Email: privacy@intellimoose.com<br />
            Address: [To be determined upon incorporation]
          </p>
        </section>

        <section className="terms-section">
          <h2>13. Changes to This Privacy Policy</h2>
          <p>
            We may update, modify, amend, or replace this Privacy Policy from time to time in our sole discretion. When we make changes, we will update the "Last Updated" date at the top of this Policy and, in some cases, we may provide additional notice such as a notification on our website or an email to the address associated with your account. Your continued use of the Services after any changes to this Policy constitutes your acceptance of the revised Policy. If you do not agree to the changes, you must stop using the Services and may close your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. California Privacy Rights</h2>
          <p>
            If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) and other California privacy laws, including the right to know what personal information we collect, use, and disclose; the right to request deletion of your personal information; the right to opt out of the sale or sharing of your personal information; and the right to non-discrimination for exercising your privacy rights. To exercise these rights, please contact us using the contact information provided in Section 12 above. We will verify your identity and respond to your request in accordance with applicable law. For purposes of CCPA compliance, we may disclose the categories of personal information we collect, the sources from which we collect it, the purposes for which we use it, and the categories of third parties with whom we share it, as described in this Privacy Policy.
          </p>
        </section>

        <section className="terms-section">
          <h2>15. European Privacy Rights (GDPR)</h2>
          <p>
            If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you may have additional rights under the General Data Protection Regulation (GDPR) and related data protection laws, including the right to access your personal data, rectify inaccurate data, erase data, restrict processing, object to processing, port data to another controller, withdraw consent, and lodge a complaint with a supervisory authority. We process your personal data based on one or more lawful bases including consent, contractual necessity, legitimate interests, legal obligations, and vital interests. To exercise your rights or for more information about our GDPR compliance practices, please contact us using the contact information provided in Section 12 above.
          </p>
        </section>
      </div>

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default PrivacyPage;
