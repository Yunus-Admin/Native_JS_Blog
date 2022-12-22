import { HeaderComponent } from "../components/header_component.js";
import { NavigationComponent } from "../components/navigation_component.js";
import { CreateComponent } from "../components/create_component";
import { PostsComponent } from "../components/posts_components";
import { FavoriteComponents } from "../components/favorite_components";
import { LoaderComponent } from "../components/loader_component";

new HeaderComponent("header");

const navigation = new NavigationComponent("navigation");
const loader = new LoaderComponent("loader");

const create = new CreateComponent("create");
const posts = new PostsComponent("posts", { loader });
const favorite = new FavoriteComponents("favorite", { loader });

navigation.registerTabs([
  { name: "create", component: create },
  { name: "posts", component: posts },
  { name: "favorite", component: favorite },
]);
