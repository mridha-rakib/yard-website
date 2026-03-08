"use client";
import Banner from "@/app/component/Banner";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-white  px-4">
      <div
        style={{
          background: "linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 70.71%)",
        }}
        className="text-center py-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-[#202326] mb-3">
          How It Works
        </h2>
        <p className="text-[#4B5563] text-xl">
          Start earning money in four simple steps
        </p>
      </div>
      <div>
        {/* How It Works Section */}

        {/* Steps */}
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-4 gap-8 py-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A3019] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Create Profile
            </h3>
            <p className="text-sm text-gray-600">
              Sign up in minutes and share basic job and skills
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A3019] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get Job Offers
            </h3>
            <p className="text-sm text-gray-600">
              Customers post jobs that match your skills and area
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A3019] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do the job well and make the customer happy
            </h3>
            <p className="text-sm text-gray-600">
              On your own customized web feed in minutes
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A3019] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get paid
            </h3>
            <p className="text-sm text-gray-600">
              YReceive payment quickly and get paid today
            </p>
          </div>
        </div>

        {/* Earnings Section */}
        <div className="bg-[#f0fdf4] py-20">
          <div className="text-center mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              You keep 88% of every job
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
              <div className="mb-6">
                <p className="text-4xl font-bold text-gray-900">
                  Job pays $100
                </p>
                <p className="text-gray-600 my-2">Platform fee (12%): $12</p>
              </div>
              <div className="border-t border-gray-300 pt-6">
                <p className="text-4xl font-bold text-[#0A3019]">
                  You earn $88
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Get paid your way
          </h3>
          <p className="text-gray-600 mb-10">Choose what works best for you</p>

          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="text-center">
              <div className="w-28 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1531)">
                    <path
                      d="M0.9375 3.75C0.9375 1.68164 2.61914 0 4.6875 0H17.8125C19.8809 0 21.5625 1.68164 21.5625 3.75V26.25C21.5625 28.3184 19.8809 30 17.8125 30H4.6875C2.61914 30 0.9375 28.3184 0.9375 26.25V3.75ZM13.125 26.25C13.125 25.7527 12.9275 25.2758 12.5758 24.9242C12.2242 24.5725 11.7473 24.375 11.25 24.375C10.7527 24.375 10.2758 24.5725 9.92418 24.9242C9.57254 25.2758 9.375 25.7527 9.375 26.25C9.375 26.7473 9.57254 27.2242 9.92418 27.5758C10.2758 27.9275 10.7527 28.125 11.25 28.125C11.7473 28.125 12.2242 27.9275 12.5758 27.5758C12.9275 27.2242 13.125 26.7473 13.125 26.25ZM17.8125 3.75H4.6875V22.5H17.8125V3.75Z"
                      fill="#0A3019"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1531">
                      <path d="M0 0H22.5V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-sm font-medium text-[#202326]">Cash App</p>
            </div>

            <div className="text-center">
              <div className="w-28 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1538)">
                    <path
                      d="M9.16992 26.2324L8.43164 27.9609C7.33594 27.4043 6.32812 26.7188 5.41406 25.916L6.74414 24.5859C7.47656 25.2246 8.29102 25.7812 9.16992 26.2324ZM2.37891 15.9375H0.498047C0.580078 17.1797 0.814453 18.3809 1.18359 19.5176L2.92969 18.8203C2.64258 17.9004 2.44922 16.9336 2.37891 15.9375ZM2.37891 14.0625C2.46094 12.9609 2.68359 11.8945 3.0293 10.8926L1.30078 10.1543C0.861328 11.3848 0.585938 12.6973 0.498047 14.0625H2.37891ZM3.76758 9.16992C4.22461 8.29688 4.77539 7.48242 5.41406 6.73828L4.08398 5.4082C3.28125 6.32227 2.58984 7.33008 2.03906 8.42578L3.76758 9.16992ZM23.2617 24.5859C22.4473 25.2891 21.5391 25.8926 20.5605 26.3672L21.2578 28.1133C22.4707 27.5332 23.5898 26.7891 24.5918 25.9102L23.2617 24.5859ZM6.73828 5.41406C7.55273 4.71094 8.46094 4.10742 9.43945 3.63281L8.74219 1.88672C7.5293 2.4668 6.41016 3.21094 5.41406 4.08984L6.73828 5.41406ZM26.2324 20.8301C25.7754 21.7031 25.2246 22.5176 24.5859 23.2617L25.916 24.5918C26.7188 23.6777 27.4102 22.6641 27.9609 21.5742L26.2324 20.8301ZM27.6211 15.9375C27.5391 17.0391 27.3164 18.1055 26.9707 19.1074L28.6992 19.8457C29.1387 18.6094 29.4141 17.2969 29.4961 15.9316H27.6211V15.9375ZM18.8203 27.0703C17.9004 27.3633 16.9336 27.5508 15.9375 27.6211V29.502C17.1797 29.4199 18.3809 29.1855 19.5176 28.8164L18.8203 27.0703ZM14.0625 27.6211C12.9609 27.5391 11.8945 27.3164 10.8926 26.9707L10.1543 28.6992C11.3906 29.1387 12.7031 29.4141 14.0684 29.4961V27.6211H14.0625ZM27.0703 11.1797C27.3633 12.0996 27.5508 13.0664 27.6211 14.0625H29.502C29.4199 12.8203 29.1855 11.6191 28.8164 10.4824L27.0703 11.1797ZM5.41406 23.2617C4.71094 22.4473 4.10742 21.5391 3.63281 20.5605L1.88672 21.2578C2.4668 22.4707 3.21094 23.5898 4.08984 24.5918L5.41406 23.2617ZM15.9375 2.37891C17.0391 2.46094 18.0996 2.68359 19.1074 3.0293L19.8457 1.30078C18.6152 0.861328 17.3027 0.585938 15.9375 0.498047V2.37891ZM11.1797 2.92969C12.0996 2.63672 13.0664 2.44922 14.0625 2.37891V0.498047C12.8203 0.580078 11.6191 0.814453 10.4824 1.18359L11.1797 2.92969ZM25.916 5.4082L24.5859 6.73828C25.2891 7.55273 25.8926 8.46094 26.373 9.43945L28.1191 8.74219C27.5391 7.5293 26.7949 6.41016 25.916 5.4082ZM23.2617 5.41406L24.5918 4.08398C23.6777 3.28125 22.6699 2.58984 21.5742 2.03906L20.8359 3.76758C21.7031 4.22461 22.5234 4.77539 23.2617 5.41406Z"
                      fill="#0A3019"
                    />
                    <path
                      d="M15 22.9688C15.9061 22.9688 16.6406 22.2342 16.6406 21.3281C16.6406 20.422 15.9061 19.6875 15 19.6875C14.0939 19.6875 13.3594 20.422 13.3594 21.3281C13.3594 22.2342 14.0939 22.9688 15 22.9688Z"
                      fill="#0A3019"
                    />
                    <path
                      d="M15.4512 18.2812H14.5137C14.127 18.2812 13.8106 17.9648 13.8106 17.5781C13.8106 13.418 18.3458 13.834 18.3458 11.2617C18.3458 10.0898 17.3028 8.90625 14.9825 8.90625C13.2774 8.90625 12.3868 9.46875 11.5137 10.5879C11.2852 10.8809 10.8633 10.9395 10.5645 10.7285L9.79694 10.1895C9.46882 9.96094 9.39265 9.49805 9.6446 9.18164C10.8868 7.58789 12.3633 6.5625 14.9883 6.5625C18.0528 6.5625 20.6954 8.30859 20.6954 11.2617C20.6954 15.2227 16.1602 14.9824 16.1602 17.5781C16.1544 17.9648 15.838 18.2812 15.4512 18.2812Z"
                      fill="#0A3019"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1538">
                      <path d="M0 0H30V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-sm font-medium text-[#202326]">Venmo</p>
            </div>

            <div className="text-center">
              <div className="w-28 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1549)">
                    <path
                      d="M14.2617 0.152344L1.13667 5.77734C0.316353 6.12891 -0.140678 7.00781 0.0409622 7.875C0.222603 8.74219 0.984322 9.375 1.87495 9.375V9.84375C1.87495 10.623 2.5019 11.25 3.2812 11.25H26.7187C27.498 11.25 28.1249 10.623 28.1249 9.84375V9.375C29.0156 9.375 29.7831 8.74805 29.9589 7.875C30.1347 7.00195 29.6777 6.12305 28.8632 5.77734L15.7382 0.152344C15.2695 -0.046875 14.7304 -0.046875 14.2617 0.152344ZM7.49995 13.125H3.74995V24.627C3.71479 24.6445 3.67963 24.668 3.64448 24.6914L0.831978 26.5664C0.146431 27.0234 -0.164116 27.8789 0.0761184 28.6699C0.316353 29.4609 1.04877 30 1.87495 30H28.1249C28.9511 30 29.6777 29.4609 29.9179 28.6699C30.1581 27.8789 29.8535 27.0234 29.1621 26.5664L26.3496 24.6914C26.3144 24.668 26.2792 24.6504 26.2441 24.627V13.125H22.4999V24.375H20.1562V13.125H16.4062V24.375H13.5937V13.125H9.8437V24.375H7.49995V13.125ZM14.9999 3.75C15.4972 3.75 15.9741 3.94754 16.3258 4.29917C16.6774 4.6508 16.8749 5.12772 16.8749 5.625C16.8749 6.12228 16.6774 6.59919 16.3258 6.95083C15.9741 7.30246 15.4972 7.5 14.9999 7.5C14.5027 7.5 14.0258 7.30246 13.6741 6.95083C13.3225 6.59919 13.1249 6.12228 13.1249 5.625C13.1249 5.12772 13.3225 4.6508 13.6741 4.29917C14.0258 3.94754 14.5027 3.75 14.9999 3.75Z"
                      fill="#0A3019"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1549">
                      <path d="M0 0H30V30H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-sm font-medium text-[#202326]">Zelle</p>
            </div>

            <div className="text-center">
              <div className="w-28 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.52251 15.6211C6.31743 16.7461 5.50298 21.9902 5.26274 23.4727C5.24516 23.5781 5.20415 23.6192 5.08696 23.6192H0.715867C0.270555 23.6192 -0.0517108 23.2324 0.006883 22.8047L3.44048 1.01368C3.52837 0.451185 4.03227 0.0234505 4.61235 0.0234505C13.5362 0.0234505 14.2862 -0.193347 16.5655 0.691419C20.087 2.05665 20.4092 5.34962 19.1436 8.91212C17.8838 12.5801 14.8956 14.1563 10.9346 14.2031C8.39165 14.2442 6.86235 13.793 6.52251 15.6211ZM20.919 7.18947C20.8135 7.11329 20.7725 7.084 20.7432 7.26564C20.626 7.93361 20.4444 8.584 20.2276 9.23439C17.8897 15.9024 11.4092 15.3223 8.24516 15.3223C7.88774 15.3223 7.65337 15.5156 7.60649 15.8731C6.28227 24.0996 6.0186 25.8164 6.0186 25.8164C5.96001 26.2324 6.22368 26.5723 6.6397 26.5723H10.3604C10.8643 26.5723 11.2803 26.2031 11.3799 25.6992C11.4209 25.3828 11.3155 26.0567 12.2237 20.3496C12.4932 19.0606 13.0616 19.1953 13.9405 19.1953C18.1006 19.1953 21.3467 17.5078 22.3135 12.6152C22.6944 10.5762 22.5831 8.43165 20.919 7.18947Z"
                    fill="#0A3019"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-[#202326]">Paypal</p>
            </div>
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="text-center bg-[#f9fafb] py-20">
          <h3 className="text-4xl font-bold text-[#202326] mb-10">
            Why work with us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-[#0A3019] rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1572)">
                    <path
                      d="M8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM7.25 3.75V8C7.25 8.25 7.375 8.48438 7.58437 8.625L10.5844 10.625C10.9281 10.8562 11.3938 10.7625 11.625 10.4156C11.8562 10.0687 11.7625 9.60625 11.4156 9.375L8.75 7.6V3.75C8.75 3.33437 8.41562 3 8 3C7.58437 3 7.25 3.33437 7.25 3.75Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1572">
                      <path d="M0 0H16V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Flexible schedule
                </h4>
                <p className="text-sm text-gray-600">Work when you want</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-[#0A3019] rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1582)">
                    <path
                      d="M6.74062 15.6C8.34375 13.5938 12 8.73125 12 6C12 2.6875 9.3125 0 6 0C2.6875 0 0 2.6875 0 6C0 8.73125 3.65625 13.5938 5.25938 15.6C5.64375 16.0781 6.35625 16.0781 6.74062 15.6ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1582">
                      <path d="M0 0H12V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Local jobs</h4>
                <p className="text-sm text-gray-600">
                  Work in your neighborhood
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-[#0A3019] rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_81_1591)">
                    <path
                      d="M5.00005 0C5.55317 0 6.00005 0.446875 6.00005 1V2.11562C6.05005 2.12187 6.09692 2.12812 6.14692 2.1375C6.15942 2.14062 6.1688 2.14062 6.1813 2.14375L7.6813 2.41875C8.22505 2.51875 8.58442 3.04063 8.48442 3.58125C8.38442 4.12187 7.86255 4.48438 7.32192 4.38438L5.83755 4.1125C4.85942 3.96875 3.99692 4.06563 3.39067 4.30625C2.78442 4.54688 2.54067 4.87812 2.48442 5.18437C2.42192 5.51875 2.4688 5.70625 2.52192 5.82188C2.57817 5.94375 2.69379 6.08125 2.92192 6.23438C3.43129 6.56875 4.21255 6.7875 5.22505 7.05625L5.31567 7.08125C6.20942 7.31875 7.30317 7.60625 8.11567 8.1375C8.55942 8.42812 8.97817 8.82187 9.23755 9.37187C9.50317 9.93125 9.55942 10.5563 9.43754 11.2219C9.22192 12.4094 8.40317 13.2031 7.38755 13.6187C6.95942 13.7937 6.4938 13.9062 6.00005 13.9625V15C6.00005 15.5531 5.55317 16 5.00005 16C4.44692 16 4.00005 15.5531 4.00005 15V13.9094C3.98755 13.9062 3.97192 13.9062 3.95942 13.9031H3.95317C3.19067 13.7844 1.93755 13.4563 1.0938 13.0813C0.59067 12.8562 0.362545 12.2656 0.587545 11.7625C0.812545 11.2594 1.40317 11.0312 1.9063 11.2563C2.55942 11.5469 3.63442 11.8344 4.25629 11.9312C5.25317 12.0781 6.07505 11.9937 6.6313 11.7656C7.15942 11.55 7.40005 11.2375 7.4688 10.8625C7.52817 10.5312 7.4813 10.3406 7.42817 10.225C7.3688 10.1 7.25317 9.9625 7.02192 9.80937C6.50942 9.475 5.72505 9.25625 4.70942 8.9875L4.62192 8.96562C3.7313 8.72812 2.63755 8.4375 1.82505 7.90625C1.3813 7.61562 0.96567 7.21875 0.706295 6.66875C0.443795 6.10938 0.39067 5.48438 0.51567 4.81875C0.74067 3.625 1.63442 2.85 2.65005 2.44688C3.06567 2.28125 3.52192 2.16875 4.00005 2.10313V1C4.00005 0.446875 4.44692 0 5.00005 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_81_1591">
                      <path d="M0 0H10V16H0V0Z" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Clear pay</h4>
                <p className="text-sm text-gray-600">
                  Know exactly what you'll earn
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start text-left">
              <div className="w-10 h-10 bg-[#0A3019] rounded-full flex items-center justify-center text-white flex-shrink-0 mr-4">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 16H0V0H20V16Z" stroke="#E5E7EB" />
                  <path
                    d="M10.1062 2.6625L7.08125 5.1125C6.57812 5.51875 6.48125 6.25 6.8625 6.77187C7.26562 7.32812 8.05 7.4375 8.59062 7.01562L11.6938 4.60313C11.9125 4.43438 12.225 4.47188 12.3969 4.69063C12.5688 4.90938 12.5281 5.22188 12.3094 5.39375L11.6562 5.9L16 9.9V4H15.9781L15.8562 3.92188L13.5875 2.46875C13.1094 2.1625 12.55 2 11.9812 2C11.3 2 10.6375 2.23437 10.1062 2.6625ZM10.8188 6.55L9.20312 7.80625C8.21875 8.575 6.79063 8.375 6.05312 7.3625C5.35938 6.40938 5.53437 5.07812 6.45 4.3375L9.05 2.23438C8.6875 2.08125 8.29688 2.00312 7.9 2.00312C7.3125 2 6.74062 2.175 6.25 2.5L4 4V11H4.88125L7.7375 13.6062C8.35 14.1656 9.29688 14.1219 9.85625 13.5094C10.0281 13.3187 10.1438 13.0969 10.2031 12.8656L10.7344 13.3531C11.3438 13.9125 12.2937 13.8719 12.8531 13.2625C12.9937 13.1094 13.0969 12.9312 13.1625 12.7469C13.7688 13.1531 14.5938 13.0687 15.1031 12.5125C15.6625 11.9031 15.6219 10.9531 15.0125 10.3938L10.8188 6.55ZM0.5 4C0.225 4 0 4.225 0 4.5V11C0 11.5531 0.446875 12 1 12H2C2.55312 12 3 11.5531 3 11V4H0.5ZM1.5 10C1.63261 10 1.75979 10.0527 1.85355 10.1464C1.94732 10.2402 2 10.3674 2 10.5C2 10.6326 1.94732 10.7598 1.85355 10.8536C1.75979 10.9473 1.63261 11 1.5 11C1.36739 11 1.24021 10.9473 1.14645 10.8536C1.05268 10.7598 1 10.6326 1 10.5C1 10.3674 1.05268 10.2402 1.14645 10.1464C1.24021 10.0527 1.36739 10 1.5 10ZM17 4V11C17 11.5531 17.4469 12 18 12H19C19.5531 12 20 11.5531 20 11V4.5C20 4.225 19.775 4 19.5 4H17ZM18 10.5C18 10.3674 18.0527 10.2402 18.1464 10.1464C18.2402 10.0527 18.3674 10 18.5 10C18.6326 10 18.7598 10.0527 18.8536 10.1464C18.9473 10.2402 19 10.3674 19 10.5C19 10.6326 18.9473 10.7598 18.8536 10.8536C18.7598 10.9473 18.6326 11 18.5 11C18.3674 11 18.2402 10.9473 18.1464 10.8536C18.0527 10.7598 18 10.6326 18 10.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  No long-term commitment
                </h4>
                <p className="text-sm text-gray-600">
                  Work as much or as little as you want
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};
export default page;
