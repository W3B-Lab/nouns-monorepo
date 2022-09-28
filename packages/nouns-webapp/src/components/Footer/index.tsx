import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
// import { buildEtherscanAddressLink } from '../../utils/etherscan';
// import { externalURL, ExternalURL } from '../../utils/externalURL';
// import config from '../../config';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Footer = () => {
  // const twitterURL = externalURL(ExternalURL.twitter);
  // const discordURL = externalURL(ExternalURL.discord);
  // const etherscanURL = buildEtherscanAddressLink(config.addresses.nounsToken);
  // const discourseURL = externalURL(ExternalURL.discourse);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <footer className={classes.footerSignature}>
          <Link text={<Trans>Discord</Trans>} url="/coming-soon" leavesPage={false} />
          <Link text={<Trans>Twitter</Trans>} url="/coming-soon" leavesPage={false} />
          <Link text={<Trans>Etherscan</Trans>} url="/coming-soon" leavesPage={false} />
          <Link text={<Trans>Forums</Trans>} url="/coming-soon" leavesPage={false} />
        </footer>
      </Container>
    </div>
  );
};
export default Footer;
