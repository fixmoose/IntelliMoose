import { Link } from 'react-router-dom';
import LegalFooter from '../components/LegalFooter';
import './TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <div className="terms-header">
        <Link to="/" className="terms-back-link">← Back to Home</Link>
        <h1>Terms of Service</h1>
        <p className="terms-date">Last Updated: December 22, 2025</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms of Service ("Terms", "Agreement") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and IntelliMoose, Inc., a Delaware corporation ("Company", "we", "us", or "our"), concerning your access to and use of the IntelliMoose website, platform, and associated services including but not limited to FixMoose, VoiceMoose, SnapMoose, and EyeMoose (collectively, the "Services"). You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms by your continued use of the Services after the date such revised Terms are posted.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Critical Investment Disclaimers</h2>
          <p>
            THIS WEBSITE AND ALL MATERIALS CONTAINED HEREIN ARE FOR INFORMATIONAL AND PROMOTIONAL PURPOSES ONLY AND DO NOT CONSTITUTE AN OFFER TO SELL, A SOLICITATION OF AN OFFER TO BUY, OR A RECOMMENDATION FOR ANY SECURITY, NOR DO THEY CONSTITUTE AN OFFER TO PROVIDE INVESTMENT ADVISORY OR OTHER SERVICES BY INTELLIMOOSE, INC. OR ANY OF ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR REPRESENTATIVES (COLLECTIVELY, "COMPANY PARTIES"). No investment decision should be made based solely on the information provided on this website. Any offering of securities will be made only by means of a definitive private placement memorandum or other offering documents (which will contain important information including risk factors) and only in jurisdictions where permitted by law.
          </p>
          <p>
            The Company Parties, including without limitation the founder, officers, directors, employees, contractors, agents, advisors, and any other persons or entities associated with IntelliMoose, Inc., make no representations, warranties, or guarantees, express or implied, regarding the accuracy, completeness, or reliability of any information, projections, estimates, forecasts, or forward-looking statements contained on this website or in any related materials. All financial projections, revenue estimates, market size calculations, growth forecasts, exit valuations, and timelines presented herein are forward-looking statements based on assumptions that may or may not materialize and are subject to significant business, economic, regulatory, and competitive risks and uncertainties. Actual results, performance, events, circumstances, or developments may differ materially and adversely from those projected, and there can be no assurance that any projections will be realized or that forward-looking statements will prove accurate.
          </p>
          <p>
            <strong>NO PERSONAL LIABILITY OF FOUNDER OR COMPANY REPRESENTATIVES:</strong> To the maximum extent permitted by applicable law, the founder, officers, directors, shareholders, employees, agents, contractors, advisors, and any other individuals or entities associated with IntelliMoose, Inc. (including but not limited to the individual identified in promotional materials as founder and chief executive officer) shall not be personally liable for any obligations, debts, liabilities, claims, damages, losses, costs, or expenses of any kind or nature whatsoever, whether arising in contract, tort, negligence, strict liability, statute, regulation, or otherwise, arising from or relating to (i) IntelliMoose, Inc., its business, operations, or assets; (ii) any investment or potential investment in IntelliMoose, Inc.; (iii) any information, statements, projections, or materials provided on this website or in connection with any investment opportunity; (iv) any failure of the business, failure to achieve projected results, or loss of investor capital; or (v) any other matter related to IntelliMoose, Inc. or the Services. All such obligations, liabilities, and claims shall be solely the responsibility of IntelliMoose, Inc. as a corporate entity, and investors, users, and other parties expressly waive and release any and all claims against the Company Parties in their individual or personal capacities. By accessing this website or using the Services, you acknowledge and agree that your sole recourse for any claims shall be against IntelliMoose, Inc. as a corporate entity, and not against any individual person or entity associated with the Company.
          </p>
          <p>
            INVESTMENT IN EARLY-STAGE COMPANIES INVOLVES SIGNIFICANT RISKS, INCLUDING BUT NOT LIMITED TO: (i) the risk of complete loss of your investment; (ii) lack of liquidity and restrictions on transfer of securities; (iii) dilution of ownership through future financing rounds; (iv) potential conflicts of interest; (v) reliance on management and key personnel; (vi) intense competition and rapidly changing market conditions; (vii) technological obsolescence; (viii) regulatory and legal uncertainties; (ix) limited operating history; (x) dependence on successful product development and market adoption; and (xi) general economic conditions. Most startup companies fail, and even successful companies may take seven to ten years or longer to achieve a liquidity event such as an acquisition or initial public offering, if such an event occurs at all. You should invest only funds that you can afford to lose entirely without affecting your financial condition. You should not invest unless you are capable of evaluating the merits and risks of an investment in IntelliMoose, Inc. and have sufficient resources to bear any potential loss of your entire investment.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Accredited Investor Requirement and Securities Law Compliance</h2>
          <p>
            Any securities offered by IntelliMoose, Inc. will be offered and sold only to "accredited investors" as defined in Rule 501(a) of Regulation D under the Securities Act of 1933, as amended (the "Securities Act"), or pursuant to another applicable exemption from registration under the Securities Act and applicable state securities laws. By accessing information about investment opportunities on this website, you represent and warrant that you are an accredited investor or that you are evaluating information solely for informational purposes and will not make any investment decision without first confirming your status as an accredited investor and receiving and reviewing all required disclosure documents. The Company reserves the right to request documentation verifying your status as an accredited investor before providing access to any offering materials or accepting any investment.
          </p>
          <p>
            This website and the information contained herein are not directed to, or intended for distribution to or use by, any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation, or which would subject IntelliMoose, Inc. to any registration requirement within such jurisdiction. The securities offered by IntelliMoose, Inc. have not been and will not be registered under the Securities Act or the securities laws of any state or other jurisdiction, and may not be offered, sold, pledged, or otherwise transferred except in compliance with the registration requirements of the Securities Act and applicable state and foreign securities laws or pursuant to an exemption therefrom. The Company does not undertake to register any securities under the Securities Act or applicable state or foreign securities laws.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Confidentiality and Proprietary Information</h2>
          <p>
            All information, materials, documents, data, graphics, content, software, technology, business plans, financial projections, customer lists, trade secrets, and other intellectual property contained on this website or provided in connection with the Services (collectively, "Confidential Information") are proprietary and confidential to IntelliMoose, Inc. and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. By accessing this website or receiving any Confidential Information, you agree to hold all such information in strict confidence and not to disclose, reproduce, distribute, publish, or otherwise share any Confidential Information with any third party without the prior written consent of IntelliMoose, Inc. You further agree not to use any Confidential Information for any purpose other than evaluating a potential investment in or business relationship with IntelliMoose, Inc. This confidentiality obligation shall survive termination of these Terms and shall continue for a period of five (5) years from the date of your last access to the Confidential Information, or for such longer period as the information remains confidential and proprietary to IntelliMoose, Inc.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Description of Services and Disclaimers Regarding Product Development</h2>
          <p>
            IntelliMoose, Inc. is developing a suite of artificial intelligence-powered tools and platform services for skilled trades professionals, including: (a) FixMoose, a job management and customer relationship management platform; (b) VoiceMoose, a voice-to-documentation tool utilizing speech recognition and natural language processing; (c) SnapMoose, a computer vision-based code compliance verification tool; and (d) EyeMoose, a safety monitoring system utilizing video analysis and object detection. These products are currently in various stages of development, ranging from conceptual design to prototype to limited beta testing. Some features, capabilities, specifications, timelines, and other details described on this website may not yet be fully developed, tested, or available for commercial deployment. Actual product features, performance, pricing, and availability may differ from descriptions provided herein.
          </p>
          <p>
            THE COMPANY MAKES NO REPRESENTATIONS, WARRANTIES, OR GUARANTEES REGARDING: (i) the technical feasibility or commercial viability of any product or service described on this website; (ii) the timeline for product development, testing, launch, or market adoption; (iii) the ability to secure necessary intellectual property protections, regulatory approvals, or industry certifications; (iv) customer acceptance, revenue generation, or profitability; (v) the accuracy of market size estimates, competitive analysis, or other business assumptions; or (vi) the ability to successfully execute the business plan or achieve any stated objectives. Product development is inherently uncertain and subject to technical, financial, regulatory, competitive, and market risks. There can be no assurance that any product will be successfully developed, achieve market acceptance, generate revenue, or contribute to the Company's financial performance.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. User Obligations and Prohibited Conduct</h2>
          <p>
            By using the Services, you represent and warrant that: (a) all information you submit is truthful, accurate, current, and complete; (b) you have the legal capacity and authority to enter into these Terms; (c) you are not a minor in the jurisdiction in which you reside; (d) you will not access the Services through automated or non-human means, whether through a bot, script, scraper, or otherwise; (e) you will not use the Services for any illegal or unauthorized purpose; (f) your use of the Services will not violate any applicable law, regulation, or third-party rights; and (g) you will comply with all applicable export control and economic sanctions laws and regulations. You agree not to: (i) systematically retrieve data or content from the Services to create or compile a collection, compilation, database, or directory; (ii) make unauthorized use of the Services or any content, including modifying, copying, distributing, transmitting, displaying, performing, reproducing, publishing, licensing, creating derivative works from, transferring, or selling any information or content obtained from the Services; (iii) use any information obtained from the Services to harass, abuse, or harm another person; (iv) make improper use of our support services or submit false reports of abuse or misconduct; (v) use the Services in a manner inconsistent with applicable laws or regulations; (vi) engage in unauthorized framing of or linking to the Services; (vii) upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use of the Services; (viii) engage in automated use of the system or data mining; (ix) delete copyright or proprietary rights notices; (x) attempt to impersonate another user or person; (xi) upload or transmit any material that acts as a passive or active information collection or transmission mechanism; (xii) interfere with, disrupt, or create an undue burden on the Services or connected networks; (xiii) harass, annoy, intimidate, or threaten any Company employees or agents; (xiv) attempt to bypass any measures designed to prevent or restrict access to the Services; (xv) copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code; (xvi) decipher, decompile, disassemble, or reverse engineer any software comprising or in any way making up a part of the Services; (xvii) except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system that accesses the Services; (xviii) use a buying agent or purchasing agent to make purchases through the Services; (xix) make unauthorized use of the Services to collect usernames and email addresses for sending unsolicited email or creating user accounts under false pretenses; or (xx) use the Services as part of any effort to compete with us or otherwise use the Services for any revenue-generating endeavor or commercial enterprise.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Services and all content, features, and functionality thereof, including but not limited to all information, software, text, displays, images, video, audio, design, presentation, selection, and arrangement, are owned by IntelliMoose, Inc., its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The IntelliMoose name, the IntelliMoose logo, FixMoose, VoiceMoose, SnapMoose, EyeMoose, and all related names, logos, product and service names, designs, and slogans are trademarks of IntelliMoose, Inc. or its affiliates or licensors. You must not use such marks without the prior written permission of IntelliMoose, Inc. All other names, logos, product and service names, designs, and slogans on the Services are the trademarks of their respective owners. Subject to your compliance with these Terms, IntelliMoose, Inc. grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your personal, non-commercial use or internal business purposes related to evaluating a potential investment or business relationship with IntelliMoose, Inc. This license does not include any right to: (a) resell, distribute, or make commercial use of the Services or content; (b) modify or make derivative works based upon the Services or content; (c) download or copy account information for the benefit of another party; (d) use data mining, robots, or similar data gathering or extraction methods; or (e) use the Services for any purpose other than its intended purpose. Any use of the Services not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            IntelliMoose, Inc. may pursue patent, trademark, copyright, trade secret, and other intellectual property protections for various aspects of its technology, products, business methods, and brand assets. Certain features described on this website may be subject to pending patent applications or may be considered for future patent filings. Disclosure of information on this website does not constitute a waiver of any intellectual property rights and does not grant any license or right to use any proprietary information, technology, or intellectual property of IntelliMoose, Inc. All rights not expressly granted herein are reserved by IntelliMoose, Inc.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Limitation of Liability and Disclaimers</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL INTELLIMOOSE, INC., ITS AFFILIATES, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES, AGENTS, CONTRACTORS, LICENSORS, SERVICE PROVIDERS, SUBCONTRACTORS, SUPPLIERS, INTERNS, ADVISORS, OR OTHER REPRESENTATIVES (COLLECTIVELY, "COMPANY PARTIES") BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF GOODWILL, LOSS OF USE, LOSS OF DATA, LOSS OF BUSINESS OPPORTUNITIES, COST OF SUBSTITUTE SERVICES, OR OTHER INTANGIBLE LOSSES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, STATUTE, OR OTHERWISE, ARISING FROM OR RELATED TO: (i) YOUR ACCESS TO, USE OF, OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OR THROUGH THE SERVICES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; (iv) ANY INVESTMENT OR POTENTIAL INVESTMENT IN INTELLIMOOSE, INC.; (v) ANY BUSINESS FAILURES, PRODUCT FAILURES, OR FAILURE TO ACHIEVE PROJECTED RESULTS; (vi) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT; (vii) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICES; OR (viii) ANY OTHER MATTER RELATING TO THE SERVICES, EVEN IF THE COMPANY PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            THE AGGREGATE LIABILITY OF THE COMPANY PARTIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE THE SERVICES OR OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO INTELLIMOOSE, INC. FOR USE OF THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY; OR (B) ONE HUNDRED U.S. DOLLARS ($100.00). THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN INTELLIMOOSE, INC. AND YOU.
          </p>
          <p>
            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. INTELLIMOOSE, INC. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. INTELLIMOOSE, INC. DOES NOT WARRANT THAT: (a) THE SERVICES WILL BE SECURE, AVAILABLE, UNINTERRUPTED, OR ERROR-FREE; (b) THE SERVICES WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; (c) RESULTS OR DATA OBTAINED FROM USE OF THE SERVICES WILL BE ACCURATE, COMPLETE, OR RELIABLE; (d) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIALS OBTAINED THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS; OR (e) ANY ERRORS IN THE SERVICES WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM INTELLIMOOSE, INC. OR THROUGH THE SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
          </p>
        </section>

        <section className="terms-section">
          <h2>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless IntelliMoose, Inc. and all Company Parties from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorneys' fees, expert witness fees, court costs, and litigation expenses) arising from or related to: (a) your use of and access to the Services; (b) your breach of any provision of these Terms; (c) your violation of any third-party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right; (d) any claim that your use of the Services caused damage to a third party; (e) your investment or potential investment in IntelliMoose, Inc.; (f) any disputes between you and any third party; (g) any claim arising from reliance on information, projections, or statements provided on this website or through the Services; or (h) any other matter relating to the Services or these Terms. This indemnification obligation shall survive termination of these Terms and your use of the Services. IntelliMoose, Inc. reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You agree not to settle any such matter without the prior written consent of IntelliMoose, Inc. IntelliMoose, Inc. will use reasonable efforts to notify you of any such claim, action, or proceeding upon becoming aware of it.
          </p>
        </section>

        <section className="terms-section">
          <h2>10. Dispute Resolution; Binding Arbitration; Class Action Waiver</h2>
          <p>
            PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS. Any dispute, controversy, or claim arising out of or relating to these Terms, the Services, any investment or potential investment in IntelliMoose, Inc., or any aspect of the relationship between you and IntelliMoose, Inc., whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory (collectively, "Disputes"), shall be resolved by binding arbitration administered by the American Arbitration Association ("AAA") in accordance with its Commercial Arbitration Rules and the Supplementary Procedures for Consumer-Related Disputes (collectively, "AAA Rules"), except as modified by these Terms. The AAA Rules are available at www.adr.org or by calling 1-800-778-7879. This arbitration agreement is made pursuant to a transaction involving interstate commerce and shall be governed by the Federal Arbitration Act ("FAA"), 9 U.S.C. §§ 1-16.
          </p>
          <p>
            The arbitration shall be conducted by a single arbitrator selected in accordance with the AAA Rules. The arbitrator shall have exclusive authority to resolve all Disputes, including but not limited to disputes regarding the interpretation, applicability, enforceability, or formation of these Terms, including the arbitrability of any claim and the scope and enforceability of this arbitration agreement, except that all disputes regarding the enforceability of the class action waiver set forth below shall be decided by a court and not by an arbitrator. The arbitrator shall be empowered to grant whatever relief would be available in court under law or in equity, except that the arbitrator shall not have authority to award punitive or exemplary damages, except where permitted by statute, and each party hereby waives any right to seek or recover punitive or exemplary damages with respect to any Dispute resolved by arbitration. The arbitrator's award shall be written and shall be binding on the parties and may be entered as a judgment in any court of competent jurisdiction.
          </p>
          <p>
            Unless you and IntelliMoose, Inc. agree otherwise, any arbitration hearings shall take place in the county or parish where IntelliMoose, Inc.'s principal place of business is located at the time the arbitration is initiated. If your claim does not exceed $10,000, then the arbitration will be conducted solely on the basis of documents you and IntelliMoose, Inc. submit to the arbitrator, unless you request a hearing or the arbitrator determines that a hearing is necessary. If your claim exceeds $10,000, your right to a hearing will be determined by the AAA Rules. Each party shall bear its own costs and expenses in connection with the arbitration, including attorneys' fees, except that IntelliMoose, Inc. will reimburse you for your filing fees if your claim does not exceed $75,000 and is not determined by the arbitrator to be frivolous.
          </p>
          <p>
            YOU AND INTELLIMOOSE, INC. AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING. Unless both you and IntelliMoose, Inc. agree otherwise, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of a representative, class, or consolidated proceeding. If this specific provision regarding class actions is found to be unenforceable, then the entirety of this arbitration agreement (but not the remainder of these Terms) shall be null and void. The arbitrator may award declaratory or injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party's individual claim.
          </p>
          <p>
            BY AGREEING TO THESE TERMS, YOU WAIVE YOUR RIGHT TO A JURY TRIAL AND YOUR RIGHT TO HAVE DISPUTES HEARD IN COURT (EXCEPT FOR MATTERS THAT MAY BE TAKEN TO SMALL CLAIMS COURT). YOU ALSO WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION OR OTHER CLASS PROCEEDING. If you refuse to submit to arbitration after agreeing to this provision, IntelliMoose, Inc. may apply to any court having jurisdiction for interim or preliminary relief pending an arbitrator's final determination of the merits of the Dispute.
          </p>
        </section>

        <section className="terms-section">
          <h2>11. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and any Disputes arising out of or related hereto or to the Services shall be governed by and construed in accordance with the internal laws of the State of Delaware without giving effect to any choice or conflict of law provision or rule (whether of the State of Delaware or any other jurisdiction). To the extent that any lawsuit, court proceeding, or litigation is permitted under these Terms, both you and IntelliMoose, Inc. consent to the exclusive jurisdiction and venue of the state and federal courts located in Wilmington, Delaware. You waive any objection to jurisdiction and venue in such courts based on inconvenient forum or any other grounds.
          </p>
        </section>

        <section className="terms-section">
          <h2>12. Severability and Waiver</h2>
          <p>
            If any provision of these Terms is held to be unlawful, void, or for any reason unenforceable by a court of competent jurisdiction, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. The failure of IntelliMoose, Inc. to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. No waiver by IntelliMoose, Inc. of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of IntelliMoose, Inc. to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
          </p>
        </section>

        <section className="terms-section">
          <h2>13. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any other legal notices, policies, or guidelines published by IntelliMoose, Inc. on the Services, constitute the entire agreement between you and IntelliMoose, Inc. regarding the Services and supersede all prior or contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services. Nothing in these Terms or in the understanding of the parties shall create any partnership, joint venture, agency, franchise, sales representative, or employment relationship between you and IntelliMoose, Inc.
          </p>
        </section>

        <section className="terms-section">
          <h2>14. Contact Information</h2>
          <p>
            If you have any questions, comments, or concerns regarding these Terms or the Services, please contact IntelliMoose, Inc. at:
          </p>
          <p>
            IntelliMoose, Inc.<br />
            Email: legal@intellimoose.com<br />
            Address: [To be determined upon incorporation]
          </p>
        </section>

        <section className="terms-section">
          <h2>15. Additional Provisions</h2>
          <p>
            <strong>15.1 No Professional Advice.</strong> The Services and all content provided through the Services are for informational purposes only and do not constitute legal, financial, tax, investment, accounting, or other professional advice. You should consult with qualified professionals regarding your specific situation before making any decisions based on information provided through the Services.
          </p>
          <p>
            <strong>15.2 No Guarantees Regarding Regulatory Approval or Compliance.</strong> Certain products or services described on this website may require regulatory approvals, certifications, licenses, or compliance with industry standards before they can be commercially deployed. IntelliMoose, Inc. makes no representations or warranties regarding its ability to obtain necessary approvals or maintain compliance with applicable regulations, including but not limited to regulations governing medical devices, workplace safety equipment, data privacy, telecommunications, or professional services.
          </p>
          <p>
            <strong>15.3 Third-Party Links and Services.</strong> The Services may contain links to third-party websites, applications, or services that are not owned or controlled by IntelliMoose, Inc. IntelliMoose, Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites, applications, or services. You acknowledge and agree that IntelliMoose, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such third-party content, goods, or services.
          </p>
          <p>
            <strong>15.4 Force Majeure.</strong> IntelliMoose, Inc. shall not be liable for any failure or delay in performance of its obligations under these Terms due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, earthquakes, accidents, pandemics, strikes, fuel shortages, or failures or delays in transportation, communication, or power systems.
          </p>
          <p>
            <strong>15.5 Survival.</strong> All provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity obligations, limitations of liability, dispute resolution provisions, and confidentiality obligations.
          </p>
          <p>
            <strong>15.6 Assignment.</strong> You may not assign, transfer, or delegate any of your rights or obligations under these Terms without the prior written consent of IntelliMoose, Inc. IntelliMoose, Inc. may assign, transfer, or delegate any of its rights or obligations under these Terms without restriction and without notice to you.
          </p>
          <p>
            <strong>15.7 Electronic Communications.</strong> By using the Services, you consent to receive electronic communications from IntelliMoose, Inc. These electronic communications may include notices about applicable fees and charges, transactional information, and other information concerning or related to the Services. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.
          </p>
        </section>
      </div>

      {/* Legal Footer */}
      <LegalFooter />
    </div>
  );
};

export default TermsPage;
