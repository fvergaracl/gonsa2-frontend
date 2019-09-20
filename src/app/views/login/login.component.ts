import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

  user: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    //this.router.navigate(['/student']);
    this.user = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    });

    $(function () {
      $(".input input").focus(function () {
          $(this).parent(".input").each(function () {
              $("label", this).css({
                  "line-height": "18px",
                  "font-size": "18px",
                  "font-weight": "100",
                  "top": "0px"
              });
              $(".spin", this).css({
                  "width": "100%"
              });
          });
      }).blur(function () {
          $(".spin").css({
              "width": "0px"
          });
          if ($(this).val() == "") {
              $(this).parent(".input").each(function () {
                  $("label", this).css({
                      "line-height": "60px",
                      "font-size": "24px",
                      "font-weight": "300",
                      "top": "10px"
                  });
              });
          }
      });
      $(".button").click(function (e) {
          var pX = e.pageX, pY = e.pageY, oX = $(this).offset().left, oY = $(this).offset().top;
          $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>');
          $('.x-' + oX + '.y-' + oY + '').animate({
              "width": "500px",
              "height": "500px",
              "top": "-250px",
              "left": "-250px",
          }, 600);
          $("button", this).addClass('active');
      });
      $(".alt-2").click(function () {
          if (!$(this).hasClass('material-button')) {
              $(".shape").css({
                  "width": "100%",
                  "height": "100%",
                  "transform": "rotate(0deg)"
              });
              setTimeout(function () {
                  $(".overbox").css({
                      "overflow": "initial"
                  });
              }, 600);
              $(this).animate({
                  "width": "140px",
                  "height": "140px"
              }, 500, function () {
                  $(".box").removeClass("back");
                  $(this).removeClass('active');
              });
              $(".overbox .title").fadeOut(300);
              $(".overbox .input").fadeOut(300);
              $(".overbox .button").fadeOut(300);
              $(".alt-2").addClass('material-buton');
          }
      });
      $(".material-button").click(function () {
          if ($(this).hasClass('material-button')) {
              setTimeout(function () {
                  $(".overbox").css({
                      "overflow": "hidden"
                  });
                  $(".box").addClass("back");
              }, 200);
              $(this).addClass('active').animate({
                  "width": "700px",
                  "height": "700px"
              });
              setTimeout(function () {
                  $(".shape").css({
                      "width": "50%",
                      "height": "50%",
                      "transform": "rotate(45deg)"
                  });
                  $(".overbox .title").fadeIn(300);
                  $(".overbox .input").fadeIn(300);
                  $(".overbox .button").fadeIn(300);
              }, 700);
              $(this).removeClass('material-button');
          }
          if ($(".alt-2").hasClass('material-buton')) {
              $(".alt-2").removeClass('material-buton');
              $(".alt-2").addClass('material-button');
          }
      });
  });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordRepeat').value
       ? null : {'mismatch': true};
  }

  get f() { return this.user.controls; }

  login() {
    this.authService.login(
      {
        user: this.user.get('username').value,
        pass: this.user.get('password').value
      }
    );
  }

  fakelogin(){
    this.router.navigate(['/student']);
  }

}