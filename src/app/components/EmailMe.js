import styles from "../styles/emailMe.module.css";

const EmailMe = () => {
  const email = "mjrawlins.dev@gmail.com";

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("My email address has been copied to your clipboard!");
    } catch {
      console.log("Email did not copy.");
      alert("Send me an email at mjrawlins.dev@gmail.com");
    }
  };

  return (
    <div className={styles.emailMe} onClick={handleEmailClick}>
      <h2 className={styles.text}>
        email
        <br /> me
      </h2>
    </div>
  );
};

export default EmailMe;
