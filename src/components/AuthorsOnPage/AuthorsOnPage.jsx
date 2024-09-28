import dataOdAuthor from '../Authors/AuthorsList';
import Authors from '../Authors/Authors';
import styles from './AuthorsOnPage.module.scss';

export default function AuthorsOnPage() {
    return (
        <section className={styles.authorsOnPage}>
            <div className="container">
                <div className={styles.someAuthors}>
                    <h2 className={styles.someAuthors__title}>List of Authors</h2>
                    <div className={styles.someAuthors__area}>
                        {dataOdAuthor.slice(0, 4).map((authorName, index) => (
                            <Authors key={index} nameAuthor={authorName} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
