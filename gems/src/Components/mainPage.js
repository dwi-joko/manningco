import "../App.css";
import Rmi from "../Assets/rmi.svg";
import Dbs from "../Assets/dbs.svg";
import Lozenge from "../Assets/lozenge.svg";
import Dbsblack from "../Assets/dbs-black.png";
import PF from "../Assets/pf.png";
import Ava from "../Assets/ava.png";
import RmiGrey from "../Assets/rmi-grey.png";

function MainPage() {
  return (
    <div className="w-4/5 main-page-wrapper">
      <header className="flex p-4 px-5 bg-white header">
        <div className="w-2/3 search">
          <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" type="search" placeholder="Search anything here..." />
        </div>
        <div className="w-1/3 nav-right">
          <ul className="flex items-center">
            <li className="flex items-center">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0588 8.5H7.11765M14.1765 11.3125L17 8.5L14.1765 5.6875M9.47059 3.8125V2.875C9.47059 2.37772 9.27227 1.90081 8.91926 1.54917C8.56625 1.19754 8.08747 1 7.58824 1H2.88235C2.38312 1 1.90434 1.19754 1.55133 1.54917C1.19832 1.90081 1 2.37772 1 2.875V14.125C1 14.6223 1.19832 15.0992 1.55133 15.4508C1.90434 15.8025 2.38312 16 2.88235 16H7.58824C8.08747 16 8.56625 15.8025 8.91926 15.4508C9.27227 15.0992 9.47059 14.6223 9.47059 14.125V13.1875"
                  stroke="#EE0D0D"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-bold">Logout</p>
            </li>
            <li>
              <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.57143H25V11.4286H0V8.57143ZM0 0H25V2.85714H0V0ZM0 17.1429H25V20H0V17.1429Z" fill="#323A46" />
              </svg>
            </li>
          </ul>
        </div>
      </header>
      <div className="MainContent">
        <h1 className="font-bold">Hi Radhika, welcome back!</h1>
        <section className="clients py-11">
          <div className="pb-6 sectionTitle">
            <h2 className="font-bold">Your client list</h2>
            <p className="text-sm">You currently servicing 3 clients</p>
          </div>

          <div class="columns grid grid-cols-4 gap-x-4">
            <div className=" card drop-shadow">
              <span className="dots">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 11.8125C5.97487 11.8125 6.5625 11.2249 6.5625 10.5C6.5625 9.77513 5.97487 9.1875 5.25 9.1875C4.52513 9.1875 3.9375 9.77513 3.9375 10.5C3.9375 11.2249 4.52513 11.8125 5.25 11.8125Z" fill="#323A46" />
                  <path d="M10.5 11.8125C11.2249 11.8125 11.8125 11.2249 11.8125 10.5C11.8125 9.77513 11.2249 9.1875 10.5 9.1875C9.77513 9.1875 9.1875 9.77513 9.1875 10.5C9.1875 11.2249 9.77513 11.8125 10.5 11.8125Z" fill="#323A46" />
                  <path d="M15.75 11.8125C16.4749 11.8125 17.0625 11.2249 17.0625 10.5C17.0625 9.77513 16.4749 9.1875 15.75 9.1875C15.0251 9.1875 14.4375 9.77513 14.4375 10.5C14.4375 11.2249 15.0251 11.8125 15.75 11.8125Z" fill="#323A46" />
                </svg>
              </span>
              <div className="logo">
                <img src={Dbs} />
              </div>
              <h4 className="font-bold">DBS Bank</h4>
              <p>DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.</p>
            </div>
            <div className=" card drop-shadow">
              <span className="dots">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 11.8125C5.97487 11.8125 6.5625 11.2249 6.5625 10.5C6.5625 9.77513 5.97487 9.1875 5.25 9.1875C4.52513 9.1875 3.9375 9.77513 3.9375 10.5C3.9375 11.2249 4.52513 11.8125 5.25 11.8125Z" fill="#323A46" />
                  <path d="M10.5 11.8125C11.2249 11.8125 11.8125 11.2249 11.8125 10.5C11.8125 9.77513 11.2249 9.1875 10.5 9.1875C9.77513 9.1875 9.1875 9.77513 9.1875 10.5C9.1875 11.2249 9.77513 11.8125 10.5 11.8125Z" fill="#323A46" />
                  <path d="M15.75 11.8125C16.4749 11.8125 17.0625 11.2249 17.0625 10.5C17.0625 9.77513 16.4749 9.1875 15.75 9.1875C15.0251 9.1875 14.4375 9.77513 14.4375 10.5C14.4375 11.2249 15.0251 11.8125 15.75 11.8125Z" fill="#323A46" />
                </svg>
              </span>
              <div className="logo">
                <img src={Lozenge} />
              </div>
              <h4 className="font-bold">Proudfoot</h4>
              <p>Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.</p>
            </div>
            <div className=" card drop-shadow">
              <span className="dots">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 11.8125C5.97487 11.8125 6.5625 11.2249 6.5625 10.5C6.5625 9.77513 5.97487 9.1875 5.25 9.1875C4.52513 9.1875 3.9375 9.77513 3.9375 10.5C3.9375 11.2249 4.52513 11.8125 5.25 11.8125Z" fill="#323A46" />
                  <path d="M10.5 11.8125C11.2249 11.8125 11.8125 11.2249 11.8125 10.5C11.8125 9.77513 11.2249 9.1875 10.5 9.1875C9.77513 9.1875 9.1875 9.77513 9.1875 10.5C9.1875 11.2249 9.77513 11.8125 10.5 11.8125Z" fill="#323A46" />
                  <path d="M15.75 11.8125C16.4749 11.8125 17.0625 11.2249 17.0625 10.5C17.0625 9.77513 16.4749 9.1875 15.75 9.1875C15.0251 9.1875 14.4375 9.77513 14.4375 10.5C14.4375 11.2249 15.0251 11.8125 15.75 11.8125Z" fill="#323A46" />
                </svg>
              </span>
              <div className="logo">
                <img src={Rmi} />
              </div>
              <h4 className="font-bold">RMI</h4>
              <p>RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.</p>
            </div>
          </div>
        </section>

        <section className="approval py-11">
          <div className="flex items-center justify-between pb-6 sectionTitle">
            <div className="left">
              <h2 className="font-bold">Recent approvals</h2>
              <p className="text-sm">You can find the recent on-going approvals here</p>
            </div>
            <div className="right">
              <a href="#!" className="flex items-center btn-blue">
                <span className="icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.40257 -6.10352e-05H6.21497C6.10941 -6.10352e-05 6.05663 0.0517908 6.05663 0.155495V13.8444C6.05663 13.9481 6.10941 13.9999 6.21497 13.9999H7.40257C7.50813 13.9999 7.56091 13.9481 7.56091 13.8444V0.155495C7.56091 0.0517908 7.50813 -6.10352e-05 7.40257 -6.10352e-05Z"
                      fill="white"
                    />
                    <path
                      d="M13.4593 6.26105H0.158284C0.0527201 6.26105 -6.19888e-05 6.3129 -6.19888e-05 6.41661V7.58327C-6.19888e-05 7.68698 0.0527201 7.73883 0.158284 7.73883H13.4593C13.5649 7.73883 13.6177 7.68698 13.6177 7.58327V6.41661C13.6177 6.3129 13.5649 6.26105 13.4593 6.26105Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p>Create new approval</p>
              </a>
            </div>
          </div>

          <table class="w-full border-separate  border-spacing-y-4">
            <thead>
              <tr className="bg-white">
                <th class="font-normal text-sm">Clients</th>
                <th class="font-normal text-sm">Approval name</th>
                <th class="font-normal text-sm">Client contact</th>
                <th class="font-normal text-sm">Owner</th>
                <th class="font-normal text-sm">Date issued</th>
                <th class="font-normal text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td class="">
                  <img src={Dbsblack} />
                </td>
                <td class="font-bold">DBS DEG renewal energy LinkedIn post tiles... </td>
                <td class="">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full num">J</span>
                    <p className="pl-2 text-sm">Jasmine</p>
                  </div>
                </td>
                <td class="">
                  <div className="flex items-center">
                    <img className="w-6" src={Ava} />

                    <p className="pl-2 text-sm">Radhika</p>
                  </div>
                </td>
                <td class="text-sm">January 23, 2022</td>
                <td class="text-sm progress">
                  <p>In progress</p>
                </td>
              </tr>
              <tr className="bg-white">
                <td class="">
                  <img src={PF} />
                </td>
                <td class="font-bold">PF website mining and metals edit</td>
                <td class="">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full num dark">L</span>
                    <p className="pl-2 text-sm">Lorena</p>
                  </div>
                </td>
                <td class="">
                  <div className="flex items-center">
                    <img className="w-6" src={Ava} />

                    <p className="pl-2 text-sm">Radhika</p>
                  </div>
                </td>
                <td class="text-sm">January 23, 2022</td>
                <td class="text-sm rev-1">
                  <p>1st revision</p>
                </td>
              </tr>

              <tr className="bg-white">
                <td class="">
                  <img src={RmiGrey} />
                </td>
                <td class="font-bold">RMI January newletter EDM</td>
                <td class="">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full num pink">M</span>
                    <p className="pl-2 text-sm">Mervyn</p>
                  </div>
                </td>
                <td class="">
                  <div className="flex items-center">
                    <img className="w-6" src={Ava} />

                    <p className="pl-2 text-sm">Radhika</p>
                  </div>
                </td>
                <td class="text-sm">January 23, 2022</td>
                <td class="text-sm rev-2">
                  <p>2st revision</p>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="#!" className="text-blue">
            See all approvals here
          </a>
        </section>
      </div>
      <footer className=" text-end">
        <p>© Manning&Co. 2022</p>
      </footer>
    </div>
  );
}

export default MainPage;
