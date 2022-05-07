import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { applicationCategory } from 'src/models/AppCategory/applicationCategory.model';
import { AppCategoriesService } from 'src/services/appCategories/app-categories.service';
import { AppsService } from 'src/services/apps/apps.service';

@Component({
  selector: 'app-apps-publish-new-page',
  templateUrl: './apps-publish-new-page.component.html',
  styleUrls: ['./apps-publish-new-page.component.sass']
})
export class AppsPublishNewPageComponent implements OnInit {

  detailsFormGroup: FormGroup;
  fileFormGroup: FormGroup;
  categories: applicationCategory[];
  isWaiting:boolean = false;
  completed:boolean = false;

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute, private categoriesService: AppCategoriesService, private appService: AppsService) {
    this.categories = [];
    this.detailsFormGroup = _formBuilder.group({
      title: ['', Validators.required],
      description: ['',Validators.required],
      AppCategory: ['',Validators.required]
    });
    this.fileFormGroup = _formBuilder.group({
      apk: ['', Validators.required],
      fileSource: ['', Validators.required]
    });
  }

  get title(){
    return this.detailsFormGroup.get("title");
  }
  get description(){
    return this.detailsFormGroup.get("description");
  }
  get AppCategory(){
    return this.detailsFormGroup.get("AppCategory");
  }
  get fileSource(){
    return this.fileFormGroup.get("fileSource");
  }

  ngOnInit() {
    this.categoriesService.getCategoriesByMaster(this.route.snapshot.paramMap.get("master")! == "Game" ? 2:1)
    .subscribe({
      next: (res)=>this.categories = res
    })
  }

  onFileChange(ev:any){
    console.log(ev);
    if (ev.target.files.length > 0) {
      const file = ev.target.files[0];
      console.log(file);
      this.fileFormGroup.patchValue({
        fileSource: file
      });
    }
  }

  submit(){
    this.isWaiting = true
    let formData = new FormData()
    formData.append("apk",this.fileSource?.value)
    formData.append("title",this.title?.value)
    formData.append("description",this.description?.value)
    formData.append("idAppCategory",(this.AppCategory?.value).id)

    this.appService.publishApp(formData).subscribe({
      next: (res)=>{this.isWaiting = false; this.completed=true;console.log(res)},
      error: (res)=>{this.isWaiting = false; console.log(res)}
    });
  }
}
