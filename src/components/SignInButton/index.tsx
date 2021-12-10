import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggerIn = true;

  return isUserLoggerIn ? (
    <button
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      Lucas Rufo
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}