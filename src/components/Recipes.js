import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/reducer";
import PostDisplay from "../components/PostDisplay/PostDisplay";
import './Recipes.css'
// import Edit from '../components/PostDisplay/Edit';

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: ""
    };
  }

  componentDidMount() {
    if (this.props.user === {}) {
      axios.get("/api/user").then(res => {
        if (res.data) {
          this.props.getUser(res.data);
        } else {
          this.props.history.push("/");
        }
      });
    }
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get(`/api/posts/${this.props.user.user_id}`)
      .then(res => {
        this.setState({ posts: [...res.data] });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = () => {
    axios
      .post(`/api/posts/${this.props.user.user_id}`, {
        post: this.state.userInput
      })
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  handleEdit = (post_id, text) => {
    axios
      .put(`/api/posts/${post_id}`, { text })
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  handleDelete = post_id => {
    axios
      .delete(`/api/posts/${post_id}`)
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
		let mappedPosts = this.state.posts.map((post, index) => {
			return (
					<PostDisplay key={index} post={post}/>
			)
	})
    if (this.state.posts[0]) {
      mappedPosts = this.state.posts.map((post, index) => {
        return (
          <PostDisplay
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            key={index}
            post={post}
          />
        );
      });
    } else {
      mappedPosts = <div></div>;
    }
    return (
      <>
			<div className="recipes-background">
        <div className="dashboard-input">
          <textarea
            id="new-post"
            cols="60"
            rows="2"
            placeholder="New post..."
            value={this.state.userInput}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button onClick={this.handleClick} className="input-container-button">
            Post
          </button>
        </div>

        <section className="app-body">
          <div className="padding"></div>
          <ul className="flex-vertical-center post-feed">{mappedPosts}</ul>
        </section>
				<div>{mappedPosts}</div>
					{/* <Edit/> */}
				<div className='recipes'>
			
				INGREDIENTS
6 chicken thighs
6 chicken drumsticks
3 cups buttermilk
1/2 cup Buffalo Hot Sauce optional
2 teaspoons salt
1 teaspoon pepper


Dredging Mixture
3 cups all-purpose flour
1/2 cup cornstarch
1 tablespoon salt
1 tablespoon paprika
2 teaspoons onion powder
2 teaspoons garlic powder
1 teaspoon dried oregano
1 teaspoon dried basil
1 teaspoon white pepper
1 teaspoon cayenne pepper
1 quart vegetable oil for frying



US Customary - Metric
INSTRUCTIONS
In a large mixing bowl, whisk together buttermilk, hot sauce (optional, for added flavor), salt, and pepper in a mixing bowl. Add in chicken pieces. Cover the bowl with plastic wrap and refrigerate 4 hours.
When ready to cook, pour the vegetable oil in a skillet until it is about 3/4 inch deep. Heat to 350 degrees.
Prepare the breading by combining the flour, cornstarch, onion powder, garlic powder, oregano, basil, white pepper, cayenne pepper, paprika, and salt in a gallon sized resealable plastic bag or shallow dish. Mix it thoroughly.
Working one at a time, remove chicken pieces from buttermilk mixture. Shake it gently to remove the excess. Place it in the breading mix and coat thoroughly. Tap off the excess.
Place the breaded chicken into the 350 degree oil. Fry 3 or 4 pieces at a time. The chicken will drop the temperature of the oil so keep it as close to 350 degrees as possible. Fry each piece for 14 minutes, turning each piece over about every 2 minutes, until the chicken reaches an internal temperature of 165 degrees F. 
Remove from the oil and place on paper towels. Let them rest for at least 10 minutes before serving. <div/>


<div>Julia Child's Coq Au Vin is undeniably the best. This recipe sticks very much to the original, only minorly changing the ingredients and cooking method to bring it in line with the times. While Coq au Vin (or chicken in wine) might sound fancy, it is really just a simple French chicken stew that anyone can master. Don't be intimidated, this recipe is very easy to follow.

✨ If you love this coq au vin recipe as much as I do, make sure to give it a 5-star review in the comments below!


SCALE
1x
2x
3x
INGREDIENTS
4 chicken thighs
4 chicken drumsticks
1 1/2 cups red wine
1 cup chicken stock
Optional: 1/4 cup brandy
3 strips of bacon, cut into 1/2 inch pieces
1 medium onion, quartered then thinly sliced
4 medium carrots, cut into 1 inch pieces
4 garlic cloves, minced
2 tablespoons tomato paste
2 teaspoons fresh thyme leaves
8 ounces mushrooms, thickly sliced
8 ounces pearl onions, peeled
Beurre manie (see notes for the options)
INSTRUCTIONS
Place the chicken thighs and drumsticks in a medium-sized bowl and pour the wine, chicken stock, and (if using) the brandy over the top. Prep the vegetables.
Add the bacon to a large skillet or braiser over medium-high heat. Cook until the bacon is crispy, about 8 minutes, then remove it from the pan with a slotted spoon.
Remove the chicken from the wine marinade (save the wine) and dry the chicken with paper towels. Working in 2 batches if needed, place the chicken in the pan, skin side down. Sear until it is golden on both sides (about 5 minutes each side) then remove the chicken from the pan. Pour all but 2 tablespoons of the bacon/chicken oil into a heatproof dish and set it aside.

Add the sliced onion and carrots to the pan and let them cook until the onion is golden brown, about 7-8 minutes. Add the garlic to the pan and let it cook for 1 minute.
Push the vegetables to the side of the pan and add the tomato paste. Cook the tomato paste until it is fragrant and begins to darken. Pour the reserved wine marinade into the pan, scraping the bottom to remove any stuck on bits.
Nestle the chicken into the pan and sprinkle the thyme over top. Cover the pot, turn the heat to low, and simmer for 20 minutes.

Pour 1 tablespoon of the reserved oil (or use olive oil) into a large skillet. Add the mushrooms and saute over medium-high heat until brown, about 10 minutes.
Add the pearl onions to the pot with the chicken and cook for 10 minutes more.
In a small bowl mix together your choice of beurre manie. Remove the chicken from the pan then add the beurre manie. Stir it into the sauce and let it thicken. Season to taste with salt and pepper.
Add the chicken back into the pan and top with the cooked bacon and mushrooms. Sprinkle with a little fresh thyme.</div>
				</div>
				
				</div>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, { getUser })(Recipes);