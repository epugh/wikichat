
const Footer = () => {
  return (
    <footer className="chatbot-text-tertiary flex justify-between text-sm mt-6">
      <a
        className=" vercel-link flex h-8 w-max flex-none items-center justify-center border rounded-md text-xs"
        aria-label="Deploy on Vercel"
        href="https://vercel.com/new/clone?repository-url=https://github.com/datastax/aws-bedrock-starter&env=ASTRA_DB_NAMESPACE,OPENAI_API_KEY,ASTRA_DB_ID,ASTRA_DB_REGION,ASTRA_DB_APPLICATION_TOKEN"
      >
        <span className="px-3">▲</span>
        <hr className="h-full border-r" />
        <span className="px-3">Deploy</span>
      </a>
      <div className="ml-auto flex flex-row items-center">
        <span className="mr-1">Powered by</span>
        <svg aria-label="DataStax logotype" width="87" height="9" viewBox="0 0 87 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_209_2925)">
          <g clipPath="url(#clip1_209_2925)">
          <g clipPath="url(#clip2_209_2925)">
          <path d="M52.1707 1.9231V0.539429H45.5293L43.7258 1.9231V3.82314L45.5293 5.20681H51.3174V7.15719H44.0845V8.53943H50.9052L52.7087 7.15719V5.20681L50.9052 3.82314H45.1172V1.9231H52.1707Z" fill="#6B6F73"/>
          <path d="M17.4079 0.539429H16.1409L11.494 8.53943H13.1008L16.7773 2.21221L20.4494 8.53943H22.0548L17.4079 0.539429Z" fill="#6B6F73"/>
          <path d="M31.2213 0.539429H22.2384V1.9231H26.0349V8.53943H27.4248V1.9231H31.2213V0.539429Z" fill="#6B6F73"/>
          <path d="M63.9232 0.539429H54.9418V1.9231H58.7368V8.53943H60.1281V1.9231H63.9232V0.539429Z" fill="#6B6F73"/>
          <path d="M7.93033 0.539429H0.750977V8.53943H7.93033L9.73385 7.15575V1.9231L7.93033 0.539429ZM2.1423 1.9231H8.34252V7.15719H2.1423V1.9231Z" fill="#6B6F73"/>
          <path d="M80.353 4.53943L79.5489 3.15575V3.15719L78.0288 0.539429H76.422L78.7462 4.53943L76.422 8.53943H78.0288L79.5489 5.9231L80.353 4.53943Z" fill="#6B6F73"/>
          <path d="M82.6382 4.53943L83.4423 3.15575V3.15719L84.9638 0.539429H86.5692L84.2465 4.53943L86.5692 8.53943H84.9638L83.4423 5.9231L82.6382 4.53943Z" fill="#6B6F73"/>
          <path d="M36.0519 0.539429H37.3189L41.9658 8.53943H40.359L36.6825 2.21221L33.0104 8.53943H31.405L36.0519 0.539429Z" fill="#6B6F73"/>
          <path d="M68.7538 0.539429H70.0208L74.6677 8.53943H73.0623L69.3844 2.21221L65.7138 8.53943H64.1069L68.7538 0.539429Z" fill="#6B6F73"/>
          </g>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_209_2925">
          <rect width="85.8182" height="8" fill="white" transform="translate(0.750977 0.539429)"/>
          </clipPath>
          <clipPath id="clip1_209_2925">
          <rect width="85.8388" height="8" fill="white" transform="translate(0.750977 0.539429)"/>
          </clipPath>
          <clipPath id="clip2_209_2925">
          <rect width="85.8182" height="8" fill="white" transform="translate(0.750977 0.539429)"/>
          </clipPath>
          </defs>
        </svg>
        <span className="mx-1">and</span>
        <svg aria-label="Bedrock logo" width="20" height="21" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.887 0.908203L30 4.27921V18H40V12.874C38.2748 12.4299 37 10.8638 37 8.99997C37 6.79083 38.7909 4.99997 41 4.99997C43.2091 4.99997 45 6.79083 45 8.99997C45 10.8638 43.7252 12.4299 42 12.874V20H30V25H48.126C48.5701 23.2747 50.1362 22 52 22C54.2091 22 56 23.7908 56 26C56 28.2091 54.2091 30 52 30C50.1362 30 48.5701 28.7252 48.126 27H30V32H43.5L46.1067 35.4755C46.6703 35.1721 47.315 35 48 35C50.2091 35 52 36.7908 52 39C52 41.2091 50.2091 43 48 43C45.7909 43 44 41.2091 44 39C44 38.2052 44.2318 37.4645 44.6315 36.842L42.5 34H30V39H39V45.126C40.7252 45.57 42 47.1361 42 49C42 51.2091 40.2091 53 38 53C35.7909 53 34 51.2091 34 49C34 47.1361 35.2748 45.57 37 45.126V41H30V53.7207L19.887 57.0917L7 49.5743V39.5803L0 35.5803V22.4197L7 18.4197V8.4256L19.887 0.908203ZM8 20.1517L2 23.5803V27.6683L7.45924 24.1588L8.54076 25.8412L2 30.0459V34.4197L7.85184 37.7636L13.4592 34.1588L14.5408 35.8412L9 39.4031V48.4256L14.9132 51.875L22.47 47.152L23.53 48.848L16.8651 53.0136L20.113 54.9082L28 52.2792V36.817L14.5351 45.3448L13.4649 43.6552L28 34.4496V5.72073L20.113 3.09174L16 5.49101V15H14V6.65768L9 9.57434V18.4197L14.9595 21.8251L20 18.4648V12H22V19.5352L16 23.5352V27.5L19.6 30.2L18.4 31.8L15 29.25L11.6 31.8L10.4 30.2L14 27.5V23.5803L8 20.1517ZM41 6.99997C39.8954 6.99997 39 7.8954 39 8.99997C39 10.1045 39.8954 11 41 11C42.1046 11 43 10.1045 43 8.99997C43 7.8954 42.1046 6.99997 41 6.99997ZM52 24C50.8954 24 50 24.8954 50 26C50 27.1045 50.8954 28 52 28C53.1046 28 54 27.1045 54 26C54 24.8954 53.1046 24 52 24ZM48 37C46.8954 37 46 37.8954 46 39C46 40.1045 46.8954 41 48 41C49.1046 41 50 40.1045 50 39C50 37.8954 49.1046 37 48 37ZM38 47C36.8954 47 36 47.8954 36 49C36 50.1045 36.8954 51 38 51C39.1046 51 40 50.1045 40 49C40 47.8954 39.1046 47 38 47Z" fill="#6B6F73" />
        </svg>
        <span className="ml-1">Amazon Bedrock</span>
      </div>
    </footer>
  );
};

export default Footer;
