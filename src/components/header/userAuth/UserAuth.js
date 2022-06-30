import React from "react";
import "./userAuth.css";

// changeAuth временная
function userAuth({ userIcon, userName, changeAuth }) {
  return (
    <ul className="header__list">
      <li className="header__item header__user-info">
        <h2 className="header__user-name">Слава Занегин</h2>
        <div className="header__user-img">
          <img src={userIcon} className="header__user-img" alt="user-avatar" />
        </div>
      </li>

      <li className="header__item">
        <svg
          className="header__icon"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13" cy="13" r="13" />
          <path
            className="header__icon-inner"
            d="M20 13L9.5 19.0622L9.5 6.93782L20 13Z"
          />
        </svg>
      </li>

      <li className="header__item">
        <svg
          className="header__icon"
          viewBox="0 0 24 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.9999 21.6802L23.7261 21.4334C22.9492 20.7265 22.2693 19.9157 21.7046 19.0231C21.0879 17.7913 20.7182 16.446 20.6173 15.0663V11.0026C20.6141 10.509 20.571 10.0165 20.4885 9.53008C19.4526 6.5 19.4526 6.5 18.9526 5.5C18.0735 4.39667 18.4526 4.5 16.9526 3.5L15.6643 2.95733C14.4526 2.5 13.92 2.25671 12.9905 2.1347V1.0982C12.9905 0.80694 12.8772 0.527608 12.6756 0.321656C12.474 0.115703 12.2005 0 11.9153 0C11.6302 0 11.3567 0.115703 11.1551 0.321656C10.9534 0.527608 10.8402 0.80694 10.8402 1.0982V2.17584C8.75887 2.47572 6.85405 3.5346 5.47739 5.15696C4.10073 6.77933 3.34518 8.85564 3.35024 11.0026V15.0663C3.24937 16.446 2.87972 17.7913 2.26299 19.0231C1.70799 19.9135 1.03898 20.7241 0.273725 21.4334L-0.000100166 21.6802V24H23.9999V21.6802Z" />
          <path d="M9.99951 25H13.9995V26C13.9995 26.5523 13.5518 27 12.9995 27H10.9995C10.4472 27 9.99951 26.5523 9.99951 26V25Z" />
        </svg>
      </li>

      <li className="header__item">
        <svg
          className="header__icon"
          viewBox="0 0 25 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className="header__icon-inner" cx="12" cy="13" r="7" />
          <path
            d="M12.5048 9.46009C11.6227 9.46009 10.7967 9.79717 10.1713 10.4132C9.5489 11.0293 9.20375 11.8429 9.20375 12.7118C9.20375 13.5806 9.5489 14.3943 10.1713 15.0103C10.7967 15.6235 11.6227 15.9634 12.5048 15.9634C13.3868 15.9634 14.2128 15.6235 14.8382 15.0103C15.4607 14.3943 15.8059 13.5806 15.8059 12.7118C15.8059 11.8429 15.4607 11.0293 14.8382 10.4132C14.5328 10.11 14.1692 9.86961 13.7686 9.70599C13.368 9.54237 12.9385 9.45878 12.5048 9.46009ZM24.6677 16.3034L22.7384 14.679C22.8298 14.1269 22.877 13.5632 22.877 13.0024C22.877 12.4415 22.8298 11.8749 22.7384 11.3257L24.6677 9.70128C24.8134 9.57838 24.9177 9.41469 24.9667 9.23197C25.0157 9.04926 25.0071 8.85618 24.942 8.67841L24.9155 8.60285C24.3845 7.1403 23.5889 5.7846 22.5673 4.60146L22.5142 4.54044C22.3901 4.39675 22.2247 4.29345 22.0399 4.24417C21.8551 4.19489 21.6594 4.20194 21.4787 4.26438L19.0833 5.10418C18.1983 4.38933 17.213 3.82559 16.1451 3.4333L15.682 0.966205C15.647 0.780351 15.5555 0.60937 15.4195 0.475977C15.2836 0.342583 15.1097 0.253093 14.9209 0.219394L14.8412 0.204864C13.3072 -0.0682881 11.6906 -0.0682881 10.1566 0.204864L10.0769 0.219394C9.88814 0.253093 9.7142 0.342583 9.57826 0.475977C9.44231 0.60937 9.35079 0.780351 9.31585 0.966205L8.84975 3.44492C7.79196 3.84034 6.80656 4.40271 5.93219 5.10999L3.51909 4.26438C3.33845 4.20144 3.14264 4.19414 2.95769 4.24345C2.77274 4.29276 2.6074 4.39635 2.48364 4.54044L2.43054 4.60146C1.4107 5.78587 0.615319 7.14122 0.0823378 8.60285L0.0557877 8.67841C-0.0769624 9.04164 0.0321878 9.44847 0.330138 9.70128L2.28304 11.3431C2.19159 11.8894 2.14734 12.4473 2.14734 12.9994C2.14734 13.5574 2.19159 14.1153 2.28304 14.6558L0.336038 16.2976C0.190295 16.4205 0.0859852 16.5842 0.0369784 16.7669C-0.0120284 16.9496 -0.00341009 17.1427 0.0616877 17.3205L0.0882377 17.396C0.622188 18.8577 1.40984 20.2089 2.43644 21.3974L2.48954 21.4585C2.6136 21.6022 2.77895 21.7054 2.96379 21.7547C3.14863 21.804 3.34429 21.797 3.52499 21.7345L5.93809 20.8889C6.81719 21.6009 7.79659 22.1646 8.85565 22.554L9.32175 25.0327C9.35669 25.2185 9.44821 25.3895 9.58416 25.5229C9.7201 25.6563 9.89404 25.7458 10.0828 25.7795L10.1625 25.794C11.7116 26.0687 13.298 26.0687 14.8471 25.794L14.9267 25.7795C15.1156 25.7458 15.2895 25.6563 15.4254 25.5229C15.5614 25.3895 15.6529 25.2185 15.6879 25.0327L16.151 22.5656C17.2189 22.1704 18.2042 21.6096 19.0892 20.8947L21.4846 21.7345C21.6652 21.7975 21.8611 21.8048 22.046 21.7554C22.231 21.7061 22.3963 21.6026 22.5201 21.4585L22.5732 21.3974C23.5998 20.2031 24.3874 18.8577 24.9214 17.396L24.9479 17.3205C25.0748 16.9602 24.9656 16.5562 24.6677 16.3034ZM12.5048 17.8203C9.64035 17.8203 7.31869 15.5334 7.31869 12.7118C7.31869 9.89016 9.64035 7.60323 12.5048 7.60323C15.3693 7.60323 17.6909 9.89016 17.6909 12.7118C17.6909 15.5334 15.3693 17.8203 12.5048 17.8203Z"
            fillOpacity="0.26"
          />
          <path d="M12.5048 9.46009C11.6227 9.46009 10.7967 9.79717 10.1713 10.4132C9.5489 11.0293 9.20375 11.8429 9.20375 12.7118C9.20375 13.5806 9.5489 14.3943 10.1713 15.0103C10.7967 15.6235 11.6227 15.9634 12.5048 15.9634C13.3868 15.9634 14.2128 15.6235 14.8382 15.0103C15.4607 14.3943 15.8059 13.5806 15.8059 12.7118C15.8059 11.8429 15.4607 11.0293 14.8382 10.4132C14.5328 10.11 14.1692 9.86961 13.7686 9.70599C13.368 9.54237 12.9385 9.45878 12.5048 9.46009ZM24.6677 16.3034L22.7384 14.679C22.8298 14.1269 22.877 13.5632 22.877 13.0024C22.877 12.4415 22.8298 11.8749 22.7384 11.3257L24.6677 9.70128C24.8134 9.57838 24.9177 9.41469 24.9667 9.23197C25.0157 9.04926 25.0071 8.85618 24.942 8.67841L24.9155 8.60285C24.3845 7.1403 23.5889 5.7846 22.5673 4.60146L22.5142 4.54044C22.3901 4.39675 22.2247 4.29345 22.0399 4.24417C21.8551 4.19489 21.6594 4.20194 21.4787 4.26438L19.0833 5.10418C18.1983 4.38933 17.213 3.82559 16.1451 3.4333L15.682 0.966205C15.647 0.780351 15.5555 0.60937 15.4195 0.475977C15.2836 0.342583 15.1097 0.253093 14.9209 0.219394L14.8412 0.204864C13.3072 -0.0682881 11.6906 -0.0682881 10.1566 0.204864L10.0769 0.219394C9.88814 0.253093 9.7142 0.342583 9.57826 0.475977C9.44231 0.60937 9.35079 0.780351 9.31585 0.966205L8.84975 3.44492C7.79196 3.84034 6.80656 4.40271 5.93219 5.10999L3.51909 4.26438C3.33845 4.20144 3.14264 4.19414 2.95769 4.24345C2.77274 4.29276 2.6074 4.39635 2.48364 4.54044L2.43054 4.60146C1.4107 5.78587 0.615319 7.14122 0.0823378 8.60285L0.0557877 8.67841C-0.0769624 9.04164 0.0321878 9.44847 0.330138 9.70128L2.28304 11.3431C2.19159 11.8894 2.14734 12.4473 2.14734 12.9994C2.14734 13.5574 2.19159 14.1153 2.28304 14.6558L0.336038 16.2976C0.190295 16.4205 0.0859852 16.5842 0.0369784 16.7669C-0.0120284 16.9496 -0.00341009 17.1427 0.0616877 17.3205L0.0882377 17.396C0.622188 18.8577 1.40984 20.2089 2.43644 21.3974L2.48954 21.4585C2.6136 21.6022 2.77895 21.7054 2.96379 21.7547C3.14863 21.804 3.34429 21.797 3.52499 21.7345L5.93809 20.8889C6.81719 21.6009 7.79659 22.1646 8.85565 22.554L9.32175 25.0327C9.35669 25.2185 9.44821 25.3895 9.58416 25.5229C9.7201 25.6563 9.89404 25.7458 10.0828 25.7795L10.1625 25.794C11.7116 26.0687 13.298 26.0687 14.8471 25.794L14.9267 25.7795C15.1156 25.7458 15.2895 25.6563 15.4254 25.5229C15.5614 25.3895 15.6529 25.2185 15.6879 25.0327L16.151 22.5656C17.2189 22.1704 18.2042 21.6096 19.0892 20.8947L21.4846 21.7345C21.6652 21.7975 21.8611 21.8048 22.046 21.7554C22.231 21.7061 22.3963 21.6026 22.5201 21.4585L22.5732 21.3974C23.5998 20.2031 24.3874 18.8577 24.9214 17.396L24.9479 17.3205C25.0748 16.9602 24.9656 16.5562 24.6677 16.3034ZM12.5048 17.8203C9.64035 17.8203 7.31869 15.5334 7.31869 12.7118C7.31869 9.89016 9.64035 7.60323 12.5048 7.60323C15.3693 7.60323 17.6909 9.89016 17.6909 12.7118C17.6909 15.5334 15.3693 17.8203 12.5048 17.8203Z" />
        </svg>
      </li>

      {/* changeAuth временная */}
      <li onClick={() => {changeAuth(false)} } className="header__item">
        <svg
          className="header__icon"
          viewBox="0 0 33 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.3619 14.1818H10.5189V11.8182H22.3619V0.886364C22.3619 0.651285 22.2689 0.425835 22.1034 0.25961C21.9378 0.0933844 21.7133 0 21.4792 0H0.882707C0.648598 0 0.424079 0.0933844 0.258539 0.25961C0.0929992 0.425835 0 0.651285 0 0.886364V25.1136C0 25.3487 0.0929992 25.5742 0.258539 25.7404C0.424079 25.9066 0.648598 26 0.882707 26H21.4792C21.7133 26 21.9378 25.9066 22.1034 25.7404C22.2689 25.5742 22.3619 25.3487 22.3619 25.1136V14.1818ZM28.4945 14.1818L23.7867 18.9091L25.4514 20.5806L33 13L25.4514 5.41937L23.7867 7.09091L28.4945 11.8182H22.3619V14.1818H28.4945Z" />
        </svg>
      </li>
    </ul>
  );
}

export default userAuth;
