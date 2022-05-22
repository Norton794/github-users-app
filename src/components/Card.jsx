import React from "react";
import "../Card.css";
import { BuildingIcon, LocIcon, SocialIcon, ChainIcon } from "./Icons";
function Card(props) {
  return (
    <div className="card__wrapper">
      <div className="card__img">
        <img
          src="https://avatars.githubusercontent.com/u/583231?v=4"
          alt="User Pic"
        />
      </div>
      <div className="card__info">
        <div class="card__info--top">
          <div class="card__info--top--user">
            <div className="first">
              <h2>The Octocat</h2>
              <a href="#!">@octocat</a>
            </div>
            <span class="joined-at">Joined 25 Jan 2011</span>
          </div>
        </div>

        <div class="card__info--metrics">
          <div class="metric__repos">
            <h3>Repos</h3>
            <span>8</span>
          </div>
          <div class="metric__followers">
            <h3>Followers</h3>
            <span>5894</span>
          </div>
          <div class="metric__following">
            <h3>Following</h3>
            <span>9</span>
          </div>
        </div>

        <div class="card__info--bottom">
          <div className="left">
            <div class="bottom__loc">
              {LocIcon}
              <span>San Francisco</span>
            </div>
            <div>
              {SocialIcon}
              <span class="not-available">Not available</span>
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
                https://github.blog
              </a>
            </div>

            <div class="data-with-icon ">
              {BuildingIcon}
              <span>@github</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
