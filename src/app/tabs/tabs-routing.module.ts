import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children : [
          {
            path : '',
            loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
          }
        ]
      },
      {
        path: 'category',
        children : [
          {
            path : '',
            loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule)
          }
        ]
      },
      {
        path: 'addCategory',
        children : [
          {
            path : '',
            loadChildren: () => import('../add-category/add-category.module').then(m => m.AddCategoryPageModule)
          }
        ]
      },
      {
        path: 'chat',
        children : [
          {
            path : '',
            loadChildren: () => import('../chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'contact',
        children : [
          {
            path : '',
            loadChildren: () => import('../contact/contact.module').then(m => m.ContactPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
