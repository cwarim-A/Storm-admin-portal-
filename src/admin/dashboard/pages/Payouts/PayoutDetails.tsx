import { ArrowLeftIcon, IconWrapper } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const PayoutDetails = () => {
  return (
    <div className='border border-[#E3E3E3] rounded-lg p-5'>
        <Link to='/admin/dashboard/payouts' className='flex items-center gap-3'>
            <IconWrapper>
                <ArrowLeftIcon/>
            </IconWrapper>
            Payout History
        </Link>
        <div className='mt-14'>
            <h2>Transaction Details</h2>
            <div className='flex items-center justify-between mt-5 border border-[#E3E3E3] rounded-lg py-6 px-5 h-auto'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Creator</span>
                        <span>Eddie Nwaneri</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-sm text-[#929292]'>Date</span>
                        <span>2/1/2025</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Email Address</span>
                          <span>eddie@example.com</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Amount</span>
                          <span>$18.75</span>
                      </div>
                </div>
                <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Reference ID</span>
                          <span>25474648659570</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Status</span>
                          <span>Completed</span>
                      </div>
                </div>
            </div>
        </div>

          <div className='mt-5'>
              <h2>Transaction Details</h2>
              <div className='flex items-center justify-between mt-5 border border-[#E3E3E3] rounded-lg py-6 px-5 h-auto'>
                  <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Creator</span>
                          <span>Eddie Nwaneri</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Date</span>
                          <span>2/1/2025</span>
                      </div>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Email Address</span>
                          <span>eddie@example.com</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Amount</span>
                          <span>$18.75</span>
                      </div>
                  </div>
                  <div className='flex flex-col gap-5'>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Reference ID</span>
                          <span>25474648659570</span>
                      </div>
                      <div className='flex flex-col gap-3'>
                          <span className='text-sm text-[#929292]'>Status</span>
                          <span>Completed</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className='flex items-center justify-end gap-3 mt-5'>
            <Button size={'lg'} className='bg-white text-black border rounded-full border-amber-200'>
                Reject 
            </Button>
              <Button size={"lg"} className='bg-[#FEDE2B] text-black border rounded-full'>
                Approve
            </Button>
          </div>
    </div>
  )
}

export default PayoutDetails