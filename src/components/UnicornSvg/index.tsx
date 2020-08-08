import React from 'react'

import styled from 'styled-components'

const StyledSVG = styled.svg<{ size: string; stroke?: string, flip?: boolean }>`
  position: absolute;
  top: -150px;
  left: 50%;
  width: 260px;
  ${({ flip }) => flip === true ? 'margin-left: 220px;' : 'margin-left: -480px;'}
  ${({ flip }) => flip === true ? 'transform:scale(-1,1);' : ''} 
  g {
    opacity: 0.7;
    path {
      stroke: ${({ stroke, theme }) => stroke ?? theme.primary1};
    }
  }
`

/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
export default function UnicornSvg({ size = '16px', stroke = null, flip = false, ...rest }: { size?: string; stroke?: string, flip?: boolean }) {
  return (
    <StyledSVG width="555" height="881" viewBox="0 0 555 881" fill="none" xmlns="http://www.w3.org/2000/svg"
               size={size} stroke={stroke} flip={flip} {...rest} >
      <g opacity="0.1">
        <path
          d="M318.918 282.341C355.268 330.415 368.022 368.094 371.152 393.024C372.732 405.915 373.111 424.399 374.233 431.967C380.724 421.352 383.581 408.913 382.373 396.531C376.32 328.725 321.368 284.048 318.918 282.341Z"
          fill="#717F94"/>
        <path d="M49.1385 357.604C41.9476 360.938 43.8599 374.982 44.8872 385.125L46.2621 383.545C47.9216 369.153 50.3871 361.222 58.0047 360.353C58.0047 360.29 56.3453 354.271 49.1385 357.604Z"
              fill="#717F94"/>
        <path
          d="M139.618 271.346C131.179 275.58 118.077 276.986 110.175 278.818C120.053 282.689 134.529 280.588 142.305 276.543C152.499 271.346 156.734 259.418 157.193 248.106C151.63 257.506 148.88 266.669 139.618 271.346Z"
          fill="#717F94"/>
        <path
          d="M521.609 393.466C522.873 389.027 526.034 382.407 524.501 370.322C528.148 377.229 530.418 384.778 531.186 392.55C560.629 356.814 531.66 305.66 527.535 302.073C538.804 298.914 546.5 289.766 554.403 276.796C543.34 277.144 536.828 276.496 526.966 272.989C546.943 262.593 542.549 234.188 538.804 218.343C526.998 226.526 507.48 224.393 494.978 216.763C479.917 207.537 477.499 195.956 459.134 184.44C464.605 182.341 469.314 178.641 472.647 173.823C476.294 168.438 478.672 162.297 479.601 155.861C482.572 137.914 477.277 116.065 465.788 101.752C443.425 132.021 398.303 120.441 395.127 119.667C397.877 99.9979 383.605 51.7343 350.053 51.1339C353.372 77.8804 333.016 86.0639 314.114 72.0666C306.828 56.1104 296.571 41.1494 281.588 32.2234C264.362 21.9388 241.762 19.9008 222.117 20.5327C206.06 20.9909 190.603 25.367 178.102 29.7273C181.958 18.8107 196.514 7.89412 199.122 6.81984C161.191 -12.4382 97.6104 10.9274 89.3447 53.8354C87.7643 32.887 88.1436 15.0823 88.7284 12.839C50.3397 28.9216 49.3756 79.5392 49.834 97.6124L3.81179 53.8038L50.719 162.101C49.5021 165.561 47.8584 169.684 45.9777 174.044C42.8168 181.343 39.2609 189.337 36.2106 196.304C33.6489 201.656 31.4575 207.177 29.6518 212.829C27.8502 221.06 40.4936 251.171 39.1344 261.709C37.7254 272.101 35.6935 282.398 33.0498 292.547C29.4464 306.971 24.9738 321.395 21.0543 332.469C19.3474 337.303 17.7196 341.506 16.313 344.776C0.540294 357.683 0.192599 378.853 0.00294741 388.758C-0.313139 405.252 24.8789 424.036 34.6776 430.008C36.2581 430.955 38.0914 432.03 40.0985 433.167C46.983 437.08 54.152 440.471 61.545 443.31C66.2876 445.223 71.2999 446.385 76.401 446.754C91.8102 447.054 129.677 424.368 134.751 417.874C139.824 411.381 144.47 375.851 149.796 363.244C158.931 341.553 165.601 350.606 194.744 317.287C200.544 328.472 213.456 356.64 220.378 397.163C184.408 431.714 171.606 476.913 170.326 517.056C166.651 520.662 163.21 524.498 160.022 528.541C152.352 538.038 145.827 548.405 140.582 559.427C133.676 574.087 116.323 583.661 97.2943 591.639C91.3993 594.104 85.3305 596.379 79.3722 598.701C70.585 602.066 61.9875 605.321 54.4804 608.796C29.3674 620.44 19.0155 634.99 14.7958 651.578C11.4927 664.611 18.6204 683.664 21.8287 691.247C20.0112 705.94 15.2225 748.342 19.2684 758.927C24.1994 771.818 25.3847 774.615 42.5956 795.516C48.7751 827.823 64.5478 870.968 95.8403 881C123.277 876.671 140.393 804.616 140.867 776.463L138.623 771.597C138.623 771.597 106.666 736.699 105.228 724.977C103.79 713.254 105.576 704.834 96.6305 678.703C103.018 675.794 109.656 673.473 116.465 671.768C117.366 679.414 120.748 692.132 131.985 708.104C150.839 734.851 162.55 785.168 175.052 793.067C187.553 800.966 211.401 793.746 211.401 793.746C211.401 793.746 276.926 851.11 338.642 819.26C341.028 804.458 335.781 781.155 329.049 760.444C326.947 753.951 324.671 747.726 322.458 742.07C317.069 728.357 311.933 718.168 309.815 716.319C309.815 716.319 291.577 705.008 250.96 713.317C248.273 710.521 236.483 707.82 231.995 707.188C228.265 699.968 221.184 679.967 224.645 677.882C228.344 675.654 248.921 679.462 262.576 682.464C277.748 685.781 295.149 705.071 327.595 705.671C362.364 706.335 413.713 681.452 429.975 650.377C448.261 615.511 442.05 565.335 416.557 545.587C433.705 582.271 429.201 613.172 414.771 636.538C393.214 671.215 352.945 686.097 328.701 685.639C310.327 685.093 292.389 679.919 276.547 670.599C276.547 670.599 209.157 654.042 204.732 669.288C202.757 676.207 206.439 687.945 211.054 698.751C214.772 707.263 218.994 715.545 223.697 723.555C223.697 723.555 239.77 722.765 241.208 734.345C245.164 731.037 249.661 728.435 254.5 726.651C257.457 725.558 260.51 724.743 263.619 724.218C269.646 728.266 274.238 734.117 276.737 740.933C279.486 748.627 279.218 756.889 278.001 764.63C276.594 773.619 273.876 781.882 273.149 787.775C272.399 793.468 273.933 799.227 277.416 803.794C256.95 799.781 234.413 791.155 222.623 776.368C191.836 778.454 186.194 786.116 176.316 755.673C166.438 725.229 144.36 694.312 135.319 681.737C132.686 677.677 131.645 672.788 132.396 668.008C133.331 661.141 135.983 654.621 140.108 649.05C144.974 642.114 151.625 636.623 159.358 633.157C181.01 623.678 268.961 601.103 281.952 583.756C294.943 566.41 289.032 529.41 352.234 505.839C334.169 499.978 281.936 525.966 268.961 571.955C244.433 587.99 181.784 606.205 164.731 611.245C150.041 615.479 136.876 623.841 126.801 635.337C122.345 640.392 118.809 646.188 116.354 652.463C116.354 652.636 116.212 652.81 116.165 652.984C102.225 657.897 79.5145 665.781 79.309 676.681C79.0719 688.893 87.7643 706.556 87.2112 731.865C87.0847 738.374 98.1161 752.023 108.421 763.366C106.145 787.633 79.5619 797.001 68.7517 805.105C65.7743 807.308 63.4081 810.233 61.8769 813.605C59.3299 805.07 57.6202 796.308 56.7721 787.443C43.1645 768.848 38.1862 763.745 35.6733 755.846C33.8084 749.969 36.5267 718.152 38.1862 700.552C40.2091 700.316 44.6185 703.412 53.3267 708.246C41.8844 690.521 27.4076 670.504 33.192 652.463C37.3327 639.824 46.9102 634.942 63.4731 625.795C68.325 623.109 77.5073 619.35 88.2701 614.958C93.9438 612.635 100.044 610.123 106.192 607.485C128.081 598.132 150.444 587.216 155.28 577.468C162.614 562.555 167.924 555.351 171.733 549.031C173.161 561.893 175.953 574.565 180.062 586.837C179.066 498.367 211.212 442.93 223.903 424.541C225.336 442.201 225.336 459.948 223.903 477.608C244.654 458.192 242.631 361.096 206.344 299.704C219.778 270.477 207.087 241.25 196.862 230.033C201.476 250.792 205.254 266.369 197.146 285.754C198.115 276 196.689 266.157 192.989 257.08C192.831 256.638 192.183 256.938 192.278 257.364C195.297 270.271 193.574 283.368 189.117 295.77C187.648 299.783 185.957 303.764 184.092 307.618C171.654 322.88 151.851 327.682 141.657 345.787C133.992 342.501 117.066 336.466 104.896 341.364C101.515 342.438 98.306 343.992 95.3662 345.977C92.6531 347.72 90.3854 350.073 88.7442 352.849C92.632 348.504 104.548 344.95 114.031 345.092C115.612 345.203 123.782 346.324 128.255 356.846C128.255 357.067 128.144 357.257 128.129 357.336L128.318 356.956C130.499 362.233 131.748 369.864 130.815 380.859C128.208 391.713 125.679 401.523 121.965 406.026C114.916 414.62 91.8102 428.412 79.388 430.797C74.0034 431.678 68.4788 430.993 63.4731 428.823C67.8644 425.288 72.635 422.252 77.697 419.77C102.984 407.59 115.943 400.149 119.61 393.324C124.604 384.066 114.869 368.742 103.806 362.344C108.231 360.985 113.162 362.517 116.765 363.418C111.724 357.746 97.2627 354.587 91.7944 359.879C78.4556 372.786 78.5978 401.508 55.6658 411.05C49.7293 413.443 43.5178 415.088 37.1747 415.947L37.0483 415.852C24.2468 406.989 16.3446 394.777 15.428 385.077C14.4007 374.808 16.471 361.38 25.1002 353.481C26.2217 352.44 27.4448 351.514 28.751 350.716C31.58 343.923 35.0727 333.338 38.6603 321.79C46.1674 297.176 53.6902 268.218 54.3698 262.056C55.3655 253.004 44.2866 228.69 45.3139 217.316C45.8355 211.281 52.5365 198.99 57.1988 191.075C58.7792 188.437 60.0752 186.335 60.8654 185.008L62.8725 189.574L64.7374 193.855C65.1022 194.264 65.4928 194.65 65.9069 195.009C60.1226 209.227 59.5852 227.3 63.1412 241.645C63.9788 232.561 64.7216 223.603 67.2503 214.788C68.8307 209.211 70.8537 203.84 72.8608 198.421C78.4714 199.637 87.2902 198.8 100.281 190.664C105.761 187.46 110.163 182.697 112.925 176.983C112.971 176.859 113.024 176.738 113.083 176.619L122.565 165.766C123.211 168.419 124.193 170.978 125.489 173.381C125.489 167.978 128.35 159.794 132.19 152.338C133.312 150.142 134.529 148.009 135.762 146.018C146.082 129.541 165.774 124.58 178.291 118.482C173.329 123.111 168.082 127.503 163.246 132.274C158.692 136.611 154.917 141.698 152.088 147.314C148.945 153.749 147.644 160.928 148.326 168.057V168.91C148.453 168.594 148.579 168.262 148.69 167.946C151.851 159.49 156.443 151.639 162.266 144.739C166.305 139.981 170.781 135.612 175.636 131.689C178.797 129.067 183.538 125.575 187.569 121.563C186.833 127.507 185.708 133.396 184.202 139.193C182.742 144.664 180.27 149.813 176.916 154.375C174.862 157.093 172.491 159.778 170.2 162.512C162.535 171.659 155.897 181.185 166.47 192.971C162.693 182.781 176.474 173.033 182.274 166.651C184.807 163.908 187.072 160.929 189.038 157.756C191.068 154.492 192.808 151.055 194.238 147.487C197.454 149.427 200.481 151.664 203.278 154.17C223.018 171.706 233.038 201.66 211.07 207.774C221.832 213.887 266.969 217.395 260.284 166.335C273.307 174.376 287.152 181.154 300.885 188.895C356.88 220.491 342.214 257.159 337.488 261.709C350.321 261.393 365.462 251.693 365.019 221.249C365.019 221.328 365.098 221.423 365.13 221.518C375.261 251.377 375.355 268.407 375.355 268.407C383.352 261.361 392.155 252.182 393.309 234.883C393.878 237.774 402.065 266.353 400.152 295.264C405.779 293.368 420.382 290.098 428.774 267.617C431.413 275.516 439.695 292.326 444.973 310.92C448.482 323.259 451.09 336.45 450.552 349.342C449.636 370.527 439.489 380.938 438.683 383.339C439.41 383.45 463.054 385.362 477.515 360.874C491.738 386.562 521.052 418.388 555 454.977C535.29 422.921 526.072 401.763 521.609 393.466ZM277.764 723.555C283.618 723.947 289.409 725.007 295.022 726.714C297.819 733.381 301.581 742.513 305.358 752.102C307.729 758.137 310.099 764.362 312.233 770.333C317.875 786.021 321.969 799.813 320.135 802.988C318.302 806.164 307.839 807.285 293.932 806.148C285.587 794.252 285.84 785.405 287.61 770.855C287.847 768.833 288.131 766.684 288.416 764.409C288.969 758.829 288.552 753.195 287.183 747.758C285.06 739.331 281.896 731.2 277.764 723.555ZM96.4883 799.765C105.639 792.893 111.929 780.808 115.801 771.171C119.484 774.994 122.597 778.09 124.383 779.844C122.55 804.236 115.675 849.941 89.9927 861.442C82.0906 858.282 75.1683 847.761 69.6684 835.359C72.5132 817.175 80.6998 811.662 96.4883 799.765ZM98.7325 368.473C99.8424 368.451 100.95 368.589 102.02 368.884C101.672 378.568 89.9137 390.875 89.9137 390.875C99.1592 385.646 105.434 381.207 109.1 373.355C111.038 375.415 112.458 377.906 113.244 380.623C114.029 383.339 114.159 386.203 113.62 388.979C111.913 396.389 81.5848 408.885 67.4716 414.652C87.7485 401.539 88.7758 368.758 98.7325 368.489V368.473ZM95.1923 181.422C89.4238 185.861 81.6322 188.531 75.8637 187.015L75.5634 186.367L30.6949 93.489L54.9704 117.913C53.6586 120.267 51.9201 122.89 49.3124 123.506C50.8301 123.853 52.4154 123.757 53.8804 123.231C55.3455 122.704 56.6288 121.769 57.5781 120.536L69.0204 132.1C66.6814 137.313 62.8409 143.727 56.9143 144.739C64.5162 146.919 70.3322 142.084 73.0347 136.176L87.6063 150.884C86.0258 156.571 82.865 163.523 75.1209 166.682C73.2587 167.458 71.3037 167.989 69.3049 168.262C77.9656 170.316 84.1767 167.741 88.112 163.523C90.1026 161.3 91.5712 158.66 92.4108 155.797L97.6736 161.09L102.684 166.161C104.343 171.422 100.676 177.236 95.1923 181.438V181.422ZM514.007 378.126C509.392 373.75 491.881 353.433 484.421 343.639C488.04 332.343 487.392 324.538 484.911 313.037C481.75 331.995 468.19 353.765 461.205 362.502C464.365 350.685 463.133 337.983 461.205 326.087C458.852 312.75 454.965 299.73 449.62 287.286C438.099 259.165 438.099 259.165 428.142 234.71C422.373 258.075 417.442 268.976 409.761 278.423C410.173 270.945 409.68 263.445 408.292 256.085C407.738 253.004 402.981 229.054 380.523 196.857C382.499 211.786 388.426 229.48 381.377 246.179C380.903 233.667 372.653 197.441 347.619 182.986C354.62 195.056 360.784 232.877 352.36 242.561C353.182 221.708 338.658 202.497 322.822 189.843C311.127 180.506 246.392 144.407 246.171 144.407C246.282 144.565 258.23 196.683 232.074 200.807C237.684 188.168 229.434 165.64 216.174 150.963C210.58 144.754 204.084 139.904 197.351 137.866C197.494 137.187 197.62 136.508 197.731 135.813C199.912 123.521 199.058 109.24 194.902 98.4181C183.57 110.583 155.075 111.104 139.618 124.501C132.886 130.236 125.837 139.02 122.976 149.067L118.045 155.876L114.41 160.884C114.232 159.868 113.856 158.897 113.304 158.025L112.514 157.267L70.7273 117.487C61.0076 99.0026 58.3525 54.3884 79.1984 34.53C78.2659 46.2997 79.072 102.684 100.345 112.163C85.5991 77.4064 101.261 12.7126 175.21 12.3176C161.665 22.4127 151.298 38.9377 146.762 49.9965C141.874 55.3361 137.543 61.1587 133.834 67.3745C139.176 64.2149 156.466 34.8459 221.342 34.6564C238.569 34.6564 257.281 36.5363 272.548 45.2254C246.313 38.7323 218.355 53.1245 196.577 67.7695C211.939 62.8404 234.255 48.0691 265.689 54.2146C286.804 58.3379 295.48 77.7856 312.913 87.8333C327.137 96.0167 347.334 95.4164 356.643 80.1237C358.952 76.3211 360.11 71.9315 359.978 67.4851C363.966 71.7186 367.451 76.3998 370.361 81.435C376.832 92.6411 379.54 105.625 378.09 118.482C370.667 118.015 363.215 118.364 355.869 119.525C347.967 120.488 340.064 121.436 332.162 120.536C321.082 119.153 310.41 115.484 300.822 109.761C297.523 107.8 294.356 105.625 291.34 103.252C293.145 105.858 295.125 108.339 297.266 110.678C305.197 119.489 315.529 125.792 326.994 128.814C345.533 133.806 363.613 126.855 382.135 130.125C394.099 132.226 407.802 137.55 421.82 138.893C432.63 139.92 443.614 138.577 454.124 131.594C458.384 128.669 461.967 124.866 464.634 120.441C468.298 130.514 468.756 141.473 465.946 151.816L465.472 153.396C463.803 159.23 460.782 164.589 456.653 169.036L456.195 169.51C452.196 173.444 447.36 174.787 442.808 177.504C427.51 171.185 410.394 169.036 393.815 168.025C408.703 172.765 423.97 177.504 438.067 184.234C452.164 190.964 461.647 201.612 471.509 213.461C479.711 223.351 489.273 232.308 502.122 235.357C510.948 237.45 520.187 237.001 528.768 234.062C531.075 246.937 519.127 267.933 502.485 270.714C510.54 275.845 519.212 279.938 528.294 282.894C521.972 288.597 506.879 292.831 497.159 293.337C520.502 305.565 532.229 338.141 531.708 364.603C527.978 356.514 523.663 347.225 513.88 340.163C516.662 351.585 516.156 365.393 514.07 378.142L514.007 378.126Z"
          fill="#717F94"/>
        <path
          d="M143.696 246.448C142.653 240.729 140.535 234.409 136.521 230.144C142.408 225.966 149.179 223.199 156.308 222.055C138.67 217.821 126.817 224.488 113.383 237.537C104.991 245.689 95.0026 266.18 92.9639 272.183C90.5458 279.292 73.9987 273.478 73.9987 273.478C77.444 277.839 84.6034 283.4 92.2211 283.542C97.9264 283.653 98.0687 280.588 100.692 275.153C116.228 268.028 133.028 267.933 139.381 262.736C144.233 258.77 144.755 252.767 143.696 246.448ZM104.185 268.407C109.622 258.644 118.63 244.931 130.389 234.883C133.549 237.648 135.414 243.841 136.046 247.759C138.48 262.751 125.126 257.412 104.122 268.423L104.185 268.407Z"
          fill="#717F94"/>
        <path
          d="M48.1429 338.346C32.9391 349.484 33.0972 377.51 39.3715 387.321C37.712 374.082 41.2364 346.451 53.8956 346.245C62.1771 346.071 66.3652 348.599 68.2934 350.369L69.6842 352.027C69.8606 350.747 69.7963 349.445 69.4945 348.188C69.3365 331.979 78.74 317.398 84.5402 302.105C75.121 312.494 67.1954 324.144 60.9918 336.719C57.4358 334.807 52.979 334.807 48.1429 338.346Z"
          fill="#717F94"/>
      </g>
    </StyledSVG>
  )
}
