import { ArrowLeftIcon, BanIcon, IconWrapper, ModeratorWarnIcon, SuspendIcon, ThreeDotsIcon } from "@/assets/icons";
import User from "@/assets/images/logos/user.png";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

const ModeratorDetails = () => {
  return (
    <div className="shadow-md p-7 rounded-lg">
        <Link to="/admin/dashboard/moderators" className="flex items-center gap-5 font-bold mb-7 ">
            <IconWrapper>
                <ArrowLeftIcon/>
            </IconWrapper>
            
            Moderator Details
        </Link>
        <div className="flex justify-between  gap-5">
            <div className="flex flex-col gap-5">
                <span className="text-gray-400 text-sm">User</span>
                <div className="flex gap-3 items-center">
                    <img src={User} alt="User image" />
                    <span>Mark Dan</span>
                </div>
                <div className="flex flex-col gap-2">
                      <span className="text-gray-400 text-sm">Featured Debates</span>
                    <span>100</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-gray-400 text-sm">Report Handled</span>
                    <span>60</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-gray-400 text-sm">Most active Categories</span>
                    <span>Entertainment</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                      <span className="text-gray-400 text-sm">Joined</span>
                      <span>Nov 14, 2021 08:00</span>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-gray-400 text-sm">Last seen online</span>
                      <span>Nov 14, 2025 03:00</span>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-gray-400 text-sm">Avg. response time</span>
                      <span>3m 40s</span>
                  </div>
            </div>
            <div>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                              <IconWrapper>
                                  <ThreeDotsIcon />
                              </IconWrapper>
                          </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                              
                                  <IconWrapper className="text-lg">
                                      <SuspendIcon />
                                  </IconWrapper>
                                  <span>Suspend Moderator</span>
                              
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                              <IconWrapper className="text-lg">
                                  <ModeratorWarnIcon />
                              </IconWrapper>
                              <span>Warn Moderator</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                              <IconWrapper className="text-lg">
                                  <BanIcon />
                              </IconWrapper>
                              <span>Ban Moderator</span>
                          </DropdownMenuItem>

                      </DropdownMenuContent>
                  </DropdownMenu>
            </div>
        </div>
    </div>
  )
}

export default ModeratorDetails