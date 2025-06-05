import React from 'react';

const CorporateInfo = () => {
    return (
        <div className="bg-white text-[#1d1d1f]  max-w-7xl p-1  w-[90%] mx-[5%] px-3 mb-5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-[#1d1d1f]">
                Corporate information
            </h2>

            <div className="flex flex-col md:flex-row gap-10 text-sm leading-6">
                {/* Column 1 */}
                <div className="md:w-[30%]">
                    <h3 className="text-[#2469b3] font-bold text-2xl uppercase mb-3">Board of Directors</h3>
                    <div className="mb-4">
                        <p className="text-[#40aff0] text-lg font-semibold">Non-Executive, <br /> Non-Independent Directors</p>
                        <p>Mr. N. Chandrasekaran <strong>(Chairman)</strong></p>
                        <p>Mr. P. B. Balaji</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-[#40aff0] text-lg font-semibold">Independent Directors</p>
                        <p>Dr. K.P. Krishnan</p>
                        <p>Mr. Bharat Puri</p>
                        <p>Ms. Shikha Sharma</p>
                        <p>Mr. David Crean</p>
                    </div>

                    <div className="mb-4">
                        <p className="text-[#40aff0] text-lg font-semibold">Executive Directors</p>
                        <p>Mr. Sunil D'Souza <strong>(MD & CEO)</strong></p>
                        <p>Mr. Ajit Krishnakumar <strong>(ED & COO)</strong></p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-[#2469b3] text-2xl font-semibold">Board Committees</h4>
                        <p className="mt-2 text-[#40aff0] text-lg font-semibold">Audit Committee</p>
                        <p>Dr. K. P. Krishnan <strong>(Chairman)</strong></p>
                        <p>Mr. Bharat Puri</p>
                        <p>Ms. Shikha Sharma</p>
                        <p>Mr. David Crean</p>

                        <p className="mt-3 text-[#40aff0] text-lg font-semibold">Nomination and Remuneration Committee</p>
                        <p>Ms. Shikha Sharma <strong>(Chairperson)</strong></p>
                        <p>Mr. N. Chandrasekaran</p>
                        <p>Mr. Bharat Puri</p>

                        <p className="mt-3 text-[#40aff0] text-lg font-semibold">Stakeholders' Relationship Committee</p>
                        <p>Dr. K. P. Krishnan <strong>(Chairman)</strong></p>
                        <p>Mr. Sunil D'Souza</p>
                        <p>Mr. Ajit Krishnakumar</p>

                        <p className="mt-3 text-[#40aff0] text-lg font-semibold">Corporate Social Responsibility & Sustainability Committee</p>
                        <p>Mr. David Crean <strong>(Chairman)</strong></p>
                        <p>Ms. Shikha Sharma</p>
                        <p>Dr. K. P. Krishnan</p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className='md:w-[70%]'>
                    <div className='flex h-fit border-amber-500'>
                        <div className="w-1/2 h-fit">
                            <h3 className="text-[#40aff0] text-lg font-semibold uppercase mb-3">Risk Management Committee</h3>
                            <p>Mr. Bharat Puri <strong>(Chairman)</strong></p>
                            <p>Ms. Shikha Sharma</p>
                            <p>Mr. David Crean</p>

                            <h3 className="text-[#2469b3] font-bold text-2xl uppercase mt-8 mb-3">Registered Office</h3>
                            <p>1, Bishop Lefroy Road, Kolkata 700 020</p>
                            <p>Telephone: 033-22813779/ 3891/ 4422/ 4747/ 66053400</p>
                            <p>Fax: 033-22811199</p>
                            <p>Website: <a className="text-blue-600 underline" href="https://www.tataconsumer.com">www.tataconsumer.com</a></p>

                            <h3 className="text-[#2469b3] text-2xl font-bold uppercase mt-8 mb-3">Corporate Office</h3>
                            <p>11/13, Botawala Building</p>
                            <p>1st Floor, Horniman Circle, Fort</p>
                            <p>Mumbai- 400 001</p>
                            <p>Tel: +91-22-61218400</p>

                            <h3 className="text-[#2469b3] text-2xl font-bold uppercase mt-8 mb-3">For all investor-<br />related queries</h3>
                            <p>Write to us at: <a className="text-blue-600 underline" href="mailto:investor.relations@tataconsumer.com">investor.relations@tataconsumer.com</a></p>

                            <h3 className="text-[#2469b3] text-2xl font-bold uppercase mt-8 mb-3">Statutory Auditors</h3>
                            <p>Deloitte Haskins & Sells LLP</p>
                        </div>

                        {/* Column 3 */}
                        <div className="w-1/2 h-fit">
                            <h3 className="text-[#2469b3] text-2xl font-bold uppercase mb-3">Bankers</h3>
                            <p>HDFC Bank Limited</p>
                            <p>ICICI Bank Limited</p>
                            <p>Axis Bank Limited</p>
                            <p>Kotak Mahindra Bank Limited</p>
                            <p>Bank of Baroda Limited</p>
                            <p>Bank of America N.A.</p>
                            <p>Citibank N.A.</p>
                            <p>Standard Chartered Bank</p>
                            <p>State Bank of India</p>
                            <p>IndusInd Bank Limited</p>
                            <p>MUFG Bank Ltd.</p>

                            <h3 className="text-[#2469b3] text-2xl font-bold uppercase mt-8 mb-3">Solicitors and Legal Advisers</h3>
                            <p>Anand and Anand</p>
                            <p>AZB & Partners</p>
                            <p>Chandhiok & Mahajan</p>
                            <p>Cyril Amarchand Mangaldas</p>
                            <p>Dua Associates</p>
                            <p>Joseph & Kuriyan</p>
                            <p>JSA Advocates & Solicitors</p>
                            <p>Khaitan & Co.</p>
                            <p>Luthra and Luthra</p>
                            <p>Markos & Co.</p>
                            <p>Shardul Amarchand Mangaldas</p>
                            <p>Thomas & Thomas</p>
                            <p>Victor Moses & Co.</p>
                            <p>Wadia Ghandy & Co.</p>
                        </div>
                    </div>
                    {/* Registrar Section */}
            <div className="mt-8 flex flex-col md:flex-row gap-10">
                {/* <div className="flex-1"></div> */}
                <div className="flex-[2] flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <h3 className="text-[#2469b3] font-bold text-2xl uppercase mb-6">Registrar & Transfer Agent (RTA)</h3>
                        <p className="font-semibold text-[#1d1d1f] mb-2">Mumbai Office:</p>
                        <p>MUFG Intime India Private Limited (Formerly known as Link Intime India Private Limited)</p>
                        <p>C101, 1st floor, 247Park, LBS Marg, Vikhroli (West), Mumbai - 400083</p>
                        <p>Tel: +91 8108118484</p>
                        <p>Fax: +91-22-66568494</p>
                        <p>Website: <a className="text-blue-600 underline" href="https://in.mpms.mufg.com/" target='_blank'>https://in.mpms.mufg.com</a></p>
                    </div>
                    <div className="flex-1">
                        <div className='md:my-20'></div>
                        <p className="font-semibold text-[#1d1d1f] mb-2">Kolkata Office:</p>
                        <p>MUFG Intime India Private Limited (Formerly known as Link Intime India Private Limited)</p>
                        <p>Vaishno Chamber, Flat No. 502 & 503, 5th Floor, 6, Brabourne Road, Kolkata - 700001</p>
                        <p>Tel: +91-33-4008 1986</p>
                    </div>
                </div>
            </div>
                </div>

            </div>

            
        </div>
    );
};

export default CorporateInfo;
