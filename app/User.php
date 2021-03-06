<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function questions(){
        return $this->hasMany(Question::class);
    }
    // public function setTitleAttribute($value){
    //     $this->attribute['title']=$value;
    //     $this->attribute['slug'] =str_slug($value);
    // }
    public function getUrlAttribute(){
        // return route("questions.show",$this->id);
        return '#';
    }

}
