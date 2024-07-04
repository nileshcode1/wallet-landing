// eslint-disable-next-line no-unused-vars
import { expense_tracking, budgeting, credit_card } from "../assets"

function Features() {
  return (
    <section className="py-28 px-5 h-auto mx-auto justify-center">
        <h1 className="font-primary font-bold text-[#222] text-[32px] md:text-[40px] leading-normal text-center">Our Key Features</h1>
        <p className="font-primary font-normal text-[#8D8A8A] text-[16px] md:text-[18px] leading-[24px] text-center md:w-[917px] mx-auto mt-4 px-4">Simplifying budgeting and putting you in control of your finances. See how our tools make money management effortless</p>

        <div className="flex flex-col md:flex-row justify-center mt-16 px-2 gap-10 mx-auto">
              <div className="flex flex-col">
                  <div className="bg-[#E8FFE8] rounded-xl py-8 px-[2rem] md:p-10 transform transition-transform hover:scale-105 duration-500 cursor-pointer">
                      <h1 className="font-primary font-semibold text-[20px] md:text-[24px] text-[#222] leading-normal md:max-w-[216px]">Income & Expense Tracking</h1>
                      <p className="font-primary font-normal text-[15px] text-[#8D8A8A] leading-[24px] mt-4 md:max-w-[293px]">Record and categorize daily expenses, and log sources of income. </p>
                      <div className="pt-3 md:py-4">
                          <img src={expense_tracking} className="mx-auto w-auto h-auto" alt="expense_tracking_image" />
                      </div>
                  </div>
              </div>
              <div className="flex flex-col ">
              <div className="bg-[#DFFFF4] rounded-xl py-8 px-[2rem] md:p-10 transform transition-transform hover:scale-105 duration-500 cursor-pointer">
                      <h1 className="font-primary font-semibold text-[20px] md:text-[24px] text-[#222] leading-normal">Budget Creation</h1>
                      <p className="font-primary font-normal text-[15px] text-[#8D8A8A] leading-[24px] mt-4 md:max-w-[293px]">Set up monthly or customized budgets for various spending categories to help you stay on track.</p>
                      <div className="pt-7 md:py-10">
                        <img src={budgeting} className="mx-auto w-auto h-auto" alt="budgeting_image" />
                      </div>
                  </div>
              </div>
              <div className="flex flex-col">
              <div className="bg-[#E8FFE8] rounded-xl py-10 px-[2rem] md:p-10 transform transition-transform hover:scale-105 duration-500 cursor-pointer">
                      <h1 className="font-primary font-semibold text-[20px] md:text-[24px] text-[#222] leading-normal">Debt Management</h1>
                      <p className="font-primary font-normal text-[15px] text-[#8D8A8A] leading-[24px] mt-4 md:max-w-[293px]">Keep track of outstanding debts and create repayment plans.</p>
                      <div className="pt-10 md:py-14">
                        <img src={credit_card} className="mx-auto w-auto h-auto" alt="credit_card_image" />
                      </div>
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Features
