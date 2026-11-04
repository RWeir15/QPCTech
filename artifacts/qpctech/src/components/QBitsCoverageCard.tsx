import styles from "./QBitsCoverageCard.module.css";

const coverageRows = [
  { area: "PC", protection: "Huntress", detection: "Huntress", response: "Huntress", confirmed: true },
  { area: "Network", protection: "UniFi", detection: "UniFi", response: "UniFi", confirmed: true },
  { area: "Online Identity", protection: "To be confirmed", detection: "To be confirmed", response: "To be confirmed", confirmed: false },
  { area: "Web Presence", protection: "To be confirmed", detection: "To be confirmed", response: "To be confirmed", confirmed: false },
] as const;

export function QBitsCoverageCard() {
  return (
    <section className={styles.bingoSection} aria-labelledby="qbits-bingo-title">
      <div className={styles.bingoContainer}>
        <div className={styles.bingoHeading}>
          <span className={styles.bingoEyebrow}>A layered approach</span>
          <h2 id="qbits-bingo-title" className={styles.heading}>Q-BITS Coverage Card</h2>
          <p className={styles.bingoIntro}>
            See how we protect, detect, and respond across your technology.
          </p>
        </div>

        <div className={styles.bingoBoard} role="table" aria-label="Q-BITS tools across protection, detection, and response">
          <div className={`${styles.bingoRow} ${styles.bingoHeader}`} role="row">
            <div className={styles.bingoCell} role="columnheader">Area</div>
            <div className={styles.bingoCell} role="columnheader">Protection</div>
            <div className={styles.bingoCell} role="columnheader">Detection</div>
            <div className={styles.bingoCell} role="columnheader">Response</div>
          </div>
          {coverageRows.map((row) => {
            const termClassName = `${styles.bingoTerm} ${row.confirmed ? "" : styles.bingoPending}`;

            return (
              <div className={styles.bingoRow} role="row" key={row.area}>
                <div className={`${styles.bingoCell} ${styles.bingoArea}`} role="rowheader">{row.area}</div>
                <div className={styles.bingoCell} role="cell" data-label="Protection"><span className={termClassName}>{row.protection}</span></div>
                <div className={styles.bingoCell} role="cell" data-label="Detection"><span className={termClassName}>{row.detection}</span></div>
                <div className={styles.bingoCell} role="cell" data-label="Response"><span className={termClassName}>{row.response}</span></div>
              </div>
            );
          })}
        </div>

        <div className={styles.bingoDetails}>
          <p className={styles.bingoDetail}>
            <strong>NinjaOne (RMM):</strong> Used alongside Huntress to remotely access computers, troubleshoot and resolve issues, and review detailed device information.
          </p>
          <p className={styles.bingoDetail}>
            <strong>Network:</strong> UniFi covers the network categories shown. Some clients use SIEM instead, depending on their setup.
          </p>
          <p className={styles.bingoDetail}>
            <strong>Still being categorized:</strong> Entra ID and TechIDManager for online identity; Cloudflare and DNS for web presence. Their exact protection, detection, and response roles are still being confirmed.
          </p>
        </div>
        <p className={styles.bingoNote}>
          Huntress provides PC protection, detection, and response. Exact tools and coverage depend on your setup and Q-BITS service scope.
        </p>
      </div>
    </section>
  );
}
