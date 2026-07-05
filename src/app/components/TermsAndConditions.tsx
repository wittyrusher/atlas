import { X, Mail, Phone, MapPin } from 'lucide-react';

interface TermsAndConditionsProps {
    onClose: () => void;
}

export default function TermsAndConditions({ onClose }: TermsAndConditionsProps) {
    return (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* Sticky Header */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b bg-gradient-to-r from-[#03263a] to-[#024c68] text-white shadow-md">
                <div>
                    <h2 className="text-2xl font-bold">Terms and Conditions, Disclaimers & Privacy Policy</h2>
                    <p className="text-sm text-[#f5c624] mt-1">Hoppico - Your trust is our priority</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all flex-shrink-0 ml-4"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
                <div className="bg-[#f5c624]/10 border border-[#f5c624]/20 rounded-lg p-4 mb-6">
                    <p className="text-sm"><strong>Effective Date:</strong> July 2026</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <p className="text-sm text-red-800">
                        <strong>IMPORTANT LEGAL NOTICE:</strong> This document governs all bookings, itineraries, and services provided
                        by Hoppico. Payment of any registration amount, token deposit, or signature on any booking form constitutes
                        absolute, unconditional, and irrevocable acceptance of these terms in their entirety. No verbal assurance,
                        representation, or employee-level modification shall override these written clauses.
                    </p>
                </div>

                <div className="space-y-8">

                    {/* 1. Definitions */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            1. Definitions and Interpretation
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-2">
                            <p>
                                <strong>&quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Hoppico&quot;</strong> refers strictly to the travel organizing brand Hoppico.
                            </p>
                            <p>
                                <strong>&quot;Client&quot;, &quot;You&quot;, &quot;Passenger&quot;, or &quot;Participant&quot;</strong> refers to the individual, family, solo
                                traveler, corporate entity, school authority, or institution booking the services.
                            </p>
                            <p>
                                <strong>&quot;Independent Contractors&quot;</strong> refers to airlines, railways, shipping lines, hotels, transport
                                providers, bus owners, catering agencies, and adventure activity vendors selected to service the tour.
                            </p>
                        </div>
                    </section>

                    {/* 2. Booking, Pricing, Payment */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            2. Unilateral Booking, Pricing, and Payment Terms
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">No Contractual Obligation:</strong> A mere quotation, verbal discussion, or
                                presentation of an itinerary does not constitute a booking, inventory block, or price guarantee. A legally
                                binding contract exists only after a written booking confirmation is issued by Hoppico following receipt of
                                the specified non-refundable registration deposit.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Right to Price Revision:</strong> All prices are calculated based on tariffs,
                                currency cross-rates, fuel costs, and taxes prevailing at the time of proposal creation. Hoppico reserves the
                                absolute and unilateral right to amend, increase, or alter the final tour cost at any point up to the date of
                                departure due to vendor price hikes, tax variations, fuel surcharges, or statutory levies. The Client is
                                mandated to clear any such differential cost prior to departure.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Late Payment and Automatic Cancellation:</strong> Balance payments must be
                                cleared strictly on or before the designated deadline. Failure to remit full payment within the specified
                                timeline grants Hoppico the automatic and unchallengeable right to cancel the booking, forfeit all deposits
                                paid to date, and levy appropriate cancellation penalties without further notice.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Taxes and Non-Refundable Components:</strong> All package prices are
                                exclusive of statutory taxes (e.g., GST, TCS) unless explicitly itemized. Visa fees, specialized entry
                                permits, airfares, and specific convenience fees are strictly non-refundable under all circumstances.
                            </li>
                        </ul>
                    </section>

                    {/* 3. Segment-Specific Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            3. Segment-Specific Liability and Indemnification
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-[#03263a] mb-3">A. Institutional and School Excursions (Primary Focus)</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Joint and Several Corporate Liability:</strong> The contracting School,
                                    Educational Institution, or Management Authority shall be held jointly and severally liable alongside the
                                    parents/legal guardians for all financial obligations, compliance criteria, and physical damage claims
                                    arising during the tour.
                                </li>
                                <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Mandatory Chaperone Authority & Disciplinary Responsibility:</strong> The
                                    institution must deploy its own authorized teachers/staff (&quot;Chaperones&quot;) to accompany student groups.
                                    These Chaperones retain absolute and exclusive responsibility for student discipline, behavioral
                                    oversight, and immediate enforcement of safety compliance. Hoppico tour leads act strictly as logistical
                                    coordinators, not as caretakers or disciplinary guardians.
                                </li>
                                <li className="bg-red-50 border border-red-200 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Behavioral Repatriation at Client Cost:</strong> Hoppico enforces a
                                    strict zero-tolerance policy against bullying, abusive language, physical fighting, theft, and the
                                    possession or consumption of alcohol, tobacco, e-cigarettes, or prohibited substances by students. If any
                                    participant violates these rules, Hoppico reserves the unchallengeable right to expel the individual from
                                    the tour immediately. The parent/guardian or school must arrange and pay for immediate physical
                                    repatriation at their own exclusive cost. No refunds, credit notes, or compensations shall apply.
                                </li>
                                <li className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Minor Data and Consent:</strong> The school authority warrants that it
                                    has collected valid, written parental consent forms for every participating minor, authorizing data
                                    retention for travel logistics, medical disclosures, and marketing consent. The school indemnifies
                                    Hoppico against any third-party parental claims regarding lack of explicit consent.
                                </li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-[#03263a] mb-3">B. Corporate Companies and Corporate MICE Bookings</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="bg-gray-50 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Corporate Financial Obligation:</strong> Once a corporate entity signs
                                    the contract or issues a Purchase Order, the corporation is fully liable for the aggregate contracted
                                    amount. Employee dropouts, internal corporate policy shifts, or restructuring do not qualify for a
                                    reduction of the total booking invoice value.
                                </li>
                                <li className="bg-gray-50 rounded-lg p-4">
                                    <strong className="text-[#03263a]">Individual Conduct Liability:</strong> The corporate client assumes
                                    complete legal and financial responsibility for the behavior of its employees, executives, and guests
                                    during the tour.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#03263a] mb-3">C. Colleges, Universities, Families, and Solo Travelers</h3>
                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                                <strong className="text-[#03263a]">Assumption of Individual Risk:</strong> Adult individuals, families, and
                                collegiate participants acknowledge that travel involves inherent operational risks. Booking with Hoppico
                                constitutes an explicit assumption of all such risks by the travelers, freeing Hoppico from any claims
                                regarding individual choice of itinerary, structural variances, or destination anomalies.
                            </div>
                        </div>
                    </section>

                    {/* 4. Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            4. Comprehensive Limitation of Liability & Vendor Contract Disclaimer
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Facilitator Status Only:</strong> Hoppico operates strictly as a
                                logistical travel organizer and agent. We do not own, manage, control, or operate any airline, railway,
                                shipping liner, coach, transport vehicle, hotel, resort, restaurant, or activity center. All services are
                                rendered by Independent Contractors.
                            </li>
                            <li className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <strong className="text-[#03263a]">Disclaimer of Third-Party Actions:</strong> Hoppico shall completely
                                disclaim any liability or responsibility for death, personal injury, physical harm, sickness, mental agony,
                                trauma, financial loss, delay, or property damage caused by the independent acts, omissions, defaults,
                                bankruptcies, financial insolvency, structural collapses, or gross negligence of any Independent
                                Contractor, their staff, or their sub-agents.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Baggage and Electronics Disclaimer:</strong> All personal belongings,
                                baggage, electronic items (laptops, cameras, mobile devices), cash, jewelry, and legal documents remain
                                under the exclusive custody and sole responsibility of the individual participant at all times. Hoppico
                                accepts zero liability for theft, pilferage, loss, misplacement, or damage to personal effects, whether
                                occurring inside hired transport vehicles, hotel rooms, camp zones, or public areas. Participants are
                                strongly urged to avoid carrying luxury or high-value items.
                            </li>
                        </ul>
                    </section>

                    {/* 5. Force Majeure */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            5. Force Majeure & Unilateral Itinerary Alterations
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Force Majeure Absolution:</strong> Hoppico shall not be held liable or
                                responsible for any financial loss, itinerary cancellation, schedule modification, or delayed performance
                                arising from circumstances entirely beyond our reasonable control. These events include, but are not
                                limited to: natural disasters, earthquakes, floods, landslides, cloudbursts, pandemics, epidemics,
                                government administrative lockdowns, local political strikes, civil unrest, war, military actions,
                                terrorism, airline cancellations, railway track disruptions, or abrupt changes in school board/academic
                                mandates.
                            </li>
                            <li className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <strong className="text-[#03263a]">No Refunding under Force Majeure:</strong> In any event of Force Majeure,
                                Hoppico is under no legal obligation to issue cash refunds. The issuance of credit notes, structural
                                reschedulings, or partial adjustments remains at the absolute, unilateral discretion of Hoppico, subject
                                strictly to the cancellation policies and fund-recovery clearances of our Independent Contractors.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Operational Itinerary Modifications:</strong> To prioritize logistics or
                                address on-ground operational changes, Hoppico reserves the right to alter flight routings, change vehicle
                                types, substitute hotels with equivalent categories, adjust sightseeing sequences, or bypass specific
                                monuments without prior notice. Such changes do not constitute a breach of contract and do not entitle the
                                Client to any financial claim or refund.
                            </li>
                        </ul>
                    </section>

                    {/* 6. Health */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            6. Physical Health, Medical Fitness, and Declarations
                        </h2>
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 text-sm text-gray-700">
                            It is the sole and non-delegable duty of the individual client, or the parents/guardians in the case of minor
                            students, to ensure absolute physical and mental fitness for the selected itinerary. A comprehensive,
                            truthful medical disclosure (covering chronic illnesses, physical disabilities, severe allergies, asthma, or
                            psychological conditions) must be provided in writing before booking. Hoppico assumes no liability for
                            emergency medical costs, hospitalizations, or evacuation expenses incurred on tour; all such financial
                            liabilities remain entirely with the client or their guardians. Hoppico reserves the unilateral right to bar
                            any participant deemed medically unfit from proceeding on a trip, with normal cancellation fees applying.
                        </div>
                    </section>

                    {/* 7. Cancellation Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            7. Firm and Non-Negotiable Cancellation Policy
                        </h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                            <p className="text-sm text-red-700">
                                All cancellation requests must be explicitly submitted in writing via the registered email address. Verbal
                                or telephonic notifications will not be recognized.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="font-medium text-[#03263a] mb-3">Cancellation Fees by Timeline:</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex justify-between p-2 bg-white rounded border-l-4 border-green-400">
                                    <span><strong>More than 90 days before departure:</strong></span>
                                    <span className="text-green-600 font-semibold">25% of total booking value</span>
                                </li>
                                <li className="flex justify-between p-2 bg-white rounded border-l-4 border-yellow-400">
                                    <span><strong>61-90 days before departure:</strong></span>
                                    <span className="text-yellow-600 font-semibold">50% of total booking value</span>
                                </li>
                                <li className="flex justify-between p-2 bg-white rounded border-l-4 border-orange-400">
                                    <span><strong>31-60 days before departure:</strong></span>
                                    <span className="text-orange-600 font-semibold">75% of total booking value</span>
                                </li>
                                <li className="flex justify-between p-2 bg-white rounded border-l-4 border-red-400">
                                    <span><strong>15-30 days before departure:</strong></span>
                                    <span className="text-red-600 font-semibold">90% of total booking value</span>
                                </li>
                                <li className="flex justify-between p-2 bg-white rounded border-l-4 border-red-600">
                                    <span><strong>Less than 15 days before departure / No-Show:</strong></span>
                                    <span className="text-red-700 font-bold">100% (NO REFUND)</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm text-gray-700 mt-3">
                            Refund execution, where contractually valid, will be processed strictly within 15–30 business days via the
                            original payment method, following the complete deduction of non-recoverable supplier deposits and
                            administrative handling charges. No cash refunds shall be executed.
                        </p>
                    </section>

                    {/* 8. Property Damage */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            8. On-Ground Property Damage and Liquidated Claims
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                            Any physical damage, breakage, vandalism, defacement, or structural loss caused by a student,
                            institutional participant, corporate executive, or individual traveler to an Independent Contractor&apos;s asset
                            (including hotel fixtures, camp tents, electronics, hired coaches, and aircraft cabins) must be indemnified
                            on-spot. The contracting institution, corporate entity, or individual traveler must clear the full liquidated
                            valuation of the damage in cash or immediate bank transfer directly to the affected supplier before leaving
                            the tour location.
                        </div>
                    </section>

                    {/* 9. Marketing Consent */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            9. Perpetual Marketing Consent & Photography Releases
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                            By enrolling in any Hoppico trip, all adult participants, corporate clients, and parents/guardians of minor
                            students grant Hoppico a perpetual, royalty-free, worldwide, irrevocable license to capture, edit, display,
                            publish, and distribute photographs, video footage, digital reels, and textual testimonials collected
                            during the tour. This content may be deployed across websites, print media, billboards, and social media
                            networks for operational, corporate branding, and promotional marketing purposes without requiring
                            secondary approvals or providing financial compensation.
                        </div>
                    </section>

                    {/* 10. Jurisdiction */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            10. Absolute Exclusive Jurisdiction and Dispute Resolution
                        </h2>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Governing Law:</strong> This contract, all booking transactions, and any
                                subsequent legal interpretations shall be governed strictly and exclusively by the substantive laws of the
                                Republic of India.
                            </li>
                            <li className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <strong className="text-[#03263a]">Exclusive Territorial Jurisdiction:</strong> In the event of any
                                operational conflict, consumer dispute, legal grievance, or breach-of-contract claim arising from these
                                terms, the services rendered, or any tour managed by the company, the courts of competent jurisdiction in
                                Pune, Maharashtra, India shall hold exclusive and absolute territorial jurisdiction. The Client explicitly
                                waives any legal right to initiate proceedings in any other domestic or international forum, city, or
                                consumer court.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">Strict Limitation of Claims Window:</strong> Any legal notice, complaint,
                                or grievance must be served to Hoppico in writing within exactly seven (7) business days from the formal
                                date of tour completion. Any claim raised after this 7-day window shall be deemed legally waived,
                                abandoned, and barred from enforcement across all legal forums.
                            </li>
                            <li className="bg-gray-50 rounded-lg p-4">
                                <strong className="text-[#03263a]">No Liability for Interest:</strong> Under no circumstance—including
                                delayed processing of legitimate vendor refunds, administrative processing lags, or dispute periods—shall
                                Hoppico be held liable to pay any interest, penal charges, or compounding damages on any withheld or
                                processing funds.
                            </li>
                        </ul>
                    </section>

                    {/* 11. Severability */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">
                            11. Severability and Digital Acceptance
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                            If any specific clause, provision, or sentence within this Master Document is declared invalid, illegal, or
                            legally unenforceable by a court of competent jurisdiction, such declaration shall not impact the validity or
                            enforceability of the remaining clauses, which shall continue to hold full legal force and effect. Digital
                            processing of payments via payment gateways, bank transfers, approval over WhatsApp, email, or a physical
                            signature on any invoice constitutes an identical, legally binding digital signature executing this entire
                            contract.
                        </div>
                    </section>

                    {/* Privacy Policy (retained from prior version) */}
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">PRIVACY POLICY</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-[#03263a] mb-2">Information We Collect</h3>

                                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                                    <p className="font-medium text-[#03263a] mb-2">Personal Information:</p>
                                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                                        <li>• Full name, date of birth, and contact details</li>
                                        <li>• Passport and travel document information</li>
                                        <li>• Payment and billing information</li>
                                        <li>• Emergency contact details</li>
                                        <li>• Dietary restrictions and accessibility needs</li>
                                        <li>• Travel preferences and booking history</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="font-medium text-[#03263a] mb-2">Automatic Information:</p>
                                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                                        <li>• Website usage data and cookies</li>
                                        <li>• Device information and IP addresses</li>
                                        <li>• Location data when using our mobile services</li>
                                        <li>• Communication records with our staff</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#03263a] mb-2">How We Use Your Information</h3>
                                <p className="text-sm text-gray-700 mb-2">We use your personal information to:</p>
                                <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                                    <li>• Process and manage your travel bookings</li>
                                    <li>• Provide customer support and communicate important updates</li>
                                    <li>• Comply with legal requirements and travel regulations</li>
                                    <li>• Share necessary details with airlines, hotels, and tour operators</li>
                                    <li>• Send promotional materials (with your consent)</li>
                                    <li>• Improve our services through analytics</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#03263a] mb-2">Information Sharing</h3>
                                <p className="text-sm text-gray-700 mb-2">We may share your information with:</p>
                                <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                                    <li>• <strong>Travel suppliers</strong> (airlines, hotels, tour operators) to fulfill bookings</li>
                                    <li>• <strong>Payment processors</strong> for secure transaction processing</li>
                                    <li>• <strong>Government authorities</strong> when required by law</li>
                                    <li>• <strong>Emergency services</strong> if safety concerns arise during travel</li>
                                </ul>
                                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                                    <p className="text-sm text-red-800">We do <strong>NOT</strong> sell your personal information to third parties for marketing purposes.</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-[#03263a] mb-2">Your Rights</h3>
                                <p className="text-sm text-gray-700 mb-2">You have the right to:</p>
                                <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                                    <li>• Access and review your personal information</li>
                                    <li>• Request corrections to inaccurate data</li>
                                    <li>• Delete your account and associated data</li>
                                    <li>• Opt-out of marketing communications</li>
                                    <li>• File complaints with relevant data protection authorities</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Women's Safety & Insurance (retained) */}
                    <section>
                        <h3 className="text-lg font-semibold text-[#03263a] mb-3">Women&apos;s Safety & Security</h3>
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                            <p className="font-medium text-[#03263a] mb-2">Our Commitment:</p>
                            <ul className="space-y-1 text-sm text-gray-700 ml-4">
                                <li>• Vetted and background-verified male guides and drivers</li>
                                <li>• Female escort available for solo women travelers upon request</li>
                                <li>• Verified accommodation partners with proper security measures</li>
                                <li>• 24/7 emergency helpline with female staff availability</li>
                                <li>• Regular safety briefings for all ground staff</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-[#03263a] mb-3">Travel Insurance</h3>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-800 mb-2">
                                <strong>HIGHLY RECOMMENDED:</strong> We strongly recommend purchasing comprehensive travel insurance.
                            </p>
                            <p className="text-sm text-blue-700">
                                <strong>Mandatory Insurance:</strong> All bookings over ₹4,00,000 per person require proof of comprehensive
                                travel insurance before final documentation will be issued.
                            </p>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="border-t pt-6">
                        <h2 className="text-xl font-bold text-[#03263a] mb-4">Contact Information</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <Mail className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                                <p className="text-sm font-medium">thehoppico@gmail.com</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <Phone className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                                <p className="text-sm font-medium">+91 8805948784</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <MapPin className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                                <p className="text-sm font-medium text-center">
                                    885, Bhandarkar Rd, Deccan Gymkhana<br />
                                    Pune, Maharashtra 411004
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Acknowledgement */}
                    <div className="bg-[#03263a] text-white rounded-lg p-6 text-center">
                        <p className="font-semibold mb-2">
                            By booking with us, you acknowledge that you have read, understood, and agree to these terms in their entirety.
                        </p>
                        <p className="text-[#f5c624] font-bold">
                            REMEMBER: Our cancellation policy is strict and non-negotiable. Please ensure you are committed to your travel dates before booking.
                        </p>
                    </div>

                    <div className="text-center text-xs text-gray-500 pt-2">
                        Issued by Management / Legal Compliance Unit — Hoppico Tours & Travels, Pune, Maharashtra, India.
                        <br />
                        © 2026 Hoppico. All Rights Reserved. Registered Brand. | Deccan Gymkhana, Pune 411004.
                    </div>
                </div>
            </div>

            {/* Bottom Close Bar */}
            <div className="sticky bottom-0 border-t bg-gray-50 p-4 flex justify-end">
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gradient-to-r from-[#03263a] to-[#024c68] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                >
                    Close
                </button>
            </div>
        </div>
    );
}