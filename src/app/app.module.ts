import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SettingsService } from './../services/settings.service';
import { LearningModulesService } from './../services/learningModules.service';
import { ActionPlannerService } from './../services/actionPlanner.service';
import { YoutubePipe } from './../pipes/youtube/youtube';
import { ModulesByCategoryPage } from './../pages/modules-by-category/modules-by-category';
import { LearningModulePage } from './../pages/learning-module/learning-module';
import { AddGoalPage } from './../pages/add-goal/add-goal';
import { GoalPage } from './../pages/goal/goal';
import { ActionPlannerPage } from './../pages/action-planner/action-planner';
import { MyProgressPage } from './../pages/my-progress/my-progress';
import { LearningModulesPage } from './../pages/learning-modules/learning-modules';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipesPage } from '../pages/recipes/recipes';
import { FactsPage } from '../pages/facts/facts';
import { MessagesPage } from '../pages/messages/messages';
import { GroupsPage } from '../pages/groups/groups';
import { FriendsPage } from '../pages/friends/friends';
import { MessagePage } from '../pages/message/message';
import { GroupPage } from '../pages/group/group';
import { GroupInfoPage } from '../pages/group-info/group-info';
import { NewGroupPage } from '../pages/new-group/new-group';
import { AddMembersPage } from '../pages/add-members/add-members';
import { ToolsPage } from './../pages/tools/tools';
import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { AlertProvider } from '../providers/alert';
import { ImageProvider } from '../providers/image';
import { DataProvider } from '../providers/data';
import { FirebaseProvider } from '../providers/firebase';
import { GraphPage } from '../pages/graph/graph';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Settings } from '../settings';

import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { Contacts } from '@ionic-native/contacts';
import { MediaCapture } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';
import { Firebase } from '@ionic-native/firebase';
import { Facebook } from '@ionic-native/facebook';

import {Weight2PageModule} from '../pages/weight2/weight2.module';
import {GraphPageModule} from '../pages/graph/graph.module';
import {Weight2Page} from '../pages/weight2/weight2';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import {ScreenOrientation} from '@ionic-native/screen-orientation';


firebase.initializeApp(Settings.firebaseConfig);

@NgModule({
   declarations: [
    ToolsPage,
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
    MessagesPage,
    GroupsPage,
    GroupInfoPage,
    FriendsPage,
    MessagePage,
    GroupPage,
    NewGroupPage,
    AddMembersPage,
    FriendPipe,
    ConversationPipe,
    SearchPipe,
    DateFormatPipe,
    GroupPipe,
    LearningModulesPage,
    MyProgressPage,
    ActionPlannerPage,
    GoalPage,
    AddGoalPage,
    LearningModulePage,
    ModulesByCategoryPage,
    YoutubePipe,
    FactsPage,
    RecipesPage,


  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      menuside: 'left',
      scrollAssist: false,
      autoFocusAssist: false,
      mode: 'ios',
      tabsPlacement: 'top',

    }),
    IonicStorageModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(Settings.firebaseConfig,'ionic3chat'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule,

    Weight2PageModule,
    GraphPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    TabsPage,
    Weight2Page,
    GraphPage,
    MessagesPage,
    GroupsPage,
    FriendsPage,
    MessagePage,
    GroupPage,
    GroupInfoPage,
    NewGroupPage,
    AddMembersPage,
    LearningModulesPage,
    MyProgressPage,
    ActionPlannerPage,
    GoalPage,
    AddGoalPage,
    LearningModulePage,
    ModulesByCategoryPage,
    ToolsPage,
    FactsPage,
    RecipesPage,
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    SplashScreen,
    StatusBar,
    GooglePlus,
    Camera,
    Keyboard,
    Contacts,
    MediaCapture,
    ScreenOrientation,
    IonicStorageModule,

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActionPlannerService,
    LearningModulesService,
    SettingsService,
    YoutubeVideoPlayer,
    File,
    Geolocation,
    Firebase,
    Facebook,
    LoginProvider,
    LogoutProvider,
    LoadingProvider,
    AlertProvider,
    ImageProvider,
    DataProvider,
    FirebaseProvider,]
})
export class AppModule { }
