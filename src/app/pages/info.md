# Pages Module

Al encapsular en módulos, cuidado si en algunas de las plantillas tenemos un <routeroutlet> ya que no funcionará, sino importamos en el módulo, el AppRoutingModule.  

Pero en vez de importar el AppRoutingModule, que ya lo tenemos importado en el AppModule, como no necesitamos las configuraciones de las rutas porque ya las hicimos y están disponibles en el AppModule, lo ideal es usar:  
```javascript
import { RouterModule } from '@angular/router';

@NgModule({
  ...
  imports: [
    ...
    RouterModule,
  ]
})
```
