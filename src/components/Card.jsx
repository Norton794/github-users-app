import React from "react";
import "../Card.css";
import { BuildingIcon, LocIcon, SocialIcon, ChainIcon } from "./Icons";
function Card({user}) {
  return (
    <div className="card__wrapper">
      <div className="card__img">
        <img
          src={user?.avatar_url}
          alt="User Pic"
        />
      </div>
      <div className="card__info">
        <div className="card__info--top">
          <div className="card__info--top--user">
            <div className="first">
              <h2>{user?.name}</h2>
              <a href={user?.html_url}>{`@${user?.login}`}</a>
            </div>
            <span className="joined-at">{new Date(user?.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="card__info--metrics">
          <div className="metric__repos">
            <h3>Repos</h3>
            <span>{user?.public_repos}</span>
          </div>
          <div className="metric__followers">
            <h3>Followers</h3>
            <span>{user?.followers}</span>
          </div>
          <div className="metric__following">
            <h3>Following</h3>
            <span>{user?.following}</span>
          </div>
        </div>

        <div className="card__info--bottom">
          <div className="left">
            <div className="bottom__loc">
              {LocIcon}
              <span>{user?.location}</span>
            </div>
            <div>
              {SocialIcon}
              <span className="not-available">{user?.twitter_username ? user?.twitter_username : "Not available"}</span>
            </div>
          </div>

          <div className="right">
            <div>
              {ChainIcon}
              <a
                href="https://github.blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user?.blog ? user?.blog : "Not available"}
              </a>
            </div>

            <div className="data-with-icon ">
              {BuildingIcon}
              <span>{user?.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
