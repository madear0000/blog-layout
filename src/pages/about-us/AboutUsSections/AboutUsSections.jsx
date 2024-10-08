import React from "react";
import styles from "./AboutUsSections.module.scss";
import TeamSection from "../../../components/TeamSection/TeamSection";
import firstImg from "../../../assets/img/arms.png";
import secondImg from "../../../assets/img/three-people.png";
import JoinTeam from "../../../components/JoinTeam/JoinTeam";
import AuthorsOnPage from "../../../components/AuthorsOnPage/AuthorsOnPage";
import TeamContentAboutUs from "../TeamContentAboutUs/TeamContentAboutUs";
import OurVisionsAboutUs from "../OurVisionsAboutUs/OurVisionsAboutUs";

export default function AboutUsSections() {
    return (
        <div className={styles.AboutUsSections}>
            <div className="container">
                <TeamContentAboutUs />

                <OurVisionsAboutUs />

                <TeamSection
                    title="Our team of creatives"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
                    isReverse={false}
                    image={firstImg}
                />

                <TeamSection
                    title="Why we started this Blog"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
                    isReverse={true}
                    image={secondImg}
                />

                <AuthorsOnPage />
                <JoinTeam />
            </div>
        </div>
    );
}
