import React, { useEffect } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { getQBitsTopic } from "./qbits-topic-content";
import styles from "./QBitsTopic.module.css";

interface QBitsTopicPageProps {
  slug: string;
  Header: React.ComponentType;
  Footer: React.ComponentType;
  PageHero: React.ComponentType<any>;
  ContactBox: React.ComponentType<any>;
}

export function QBitsTopicPage({
  slug,
  Header,
  Footer,
  PageHero,
  ContactBox,
}: QBitsTopicPageProps) {
  const topic = getQBitsTopic(slug);

  useEffect(() => {
    if (!topic) return;

    const originalTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const originalDescription = descriptionTag?.getAttribute("content") ?? null;

    document.title = `${topic.title} | Q-BITS by QPCTech`;
    descriptionTag?.setAttribute("content", topic.lead);

    return () => {
      document.title = originalTitle;
      if (descriptionTag && originalDescription !== null) {
        descriptionTag.setAttribute("content", originalDescription);
      }
    };
  }, [topic]);

  if (!topic) {
    return (
      <div className={styles.pageContainer}>
        <Header />
        <main className={styles.notFound}>
          <p className={styles.eyebrow}>Q-BITS guide</p>
          <h1>Topic not found</h1>
          <p>This topic may have moved. Return to the coverage card to choose another one.</p>
          <Link href="/q-bits" className={styles.backLink}>
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Q-BITS
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <PageHero
        breadcrumb="Q-BITS"
        label={`${topic.area} · ${topic.stage}`}
        icon={ShieldCheck}
        title={topic.title}
        subtitle={topic.lead}
      />

      <main className={styles.mainContent}>
        <div className={styles.articleLayout}>
          <article className={styles.articleCard}>
            <div className={styles.articleMeta}>
              <span>{topic.area}</span>
              <span className={styles.metaDivider} aria-hidden="true">/</span>
              <span>{topic.stage}</span>
              <span className={styles.readingLabel}>Q-BITS guide</span>
            </div>

            <p className={styles.articleLead}>{topic.lead}</p>

            <div className={styles.toolList} aria-label="Related services and tools">
              {topic.tools.map((tool) => (
                <span className={styles.toolBadge} key={tool}>{tool}</span>
              ))}
            </div>

            {topic.sections.map((section) => (
              <section className={styles.articleSection} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <Link href="/q-bits" className={styles.backLink}>
              <ArrowLeft size={16} aria-hidden="true" />
              Back to the Q-BITS coverage card
            </Link>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.topicSummary}>
              <p className={styles.eyebrow}>Coverage area</p>
              <h2>{topic.area}</h2>
              <p className={styles.layerLabel}>Layer</p>
              <p className={styles.layerValue}>{topic.stage}</p>
              <div className={styles.sidebarTools}>
                {topic.tools.map((tool) => (
                  <span className={styles.toolBadge} key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <ContactBox
              headline="Have a question about Q-BITS?"
              body="Talk with our local team about the right coverage for your business."
            />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
