<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    //
    protected $fillable = [
        'title',
        'genre',
        'author',
        'isbn',
        'publish_date',
        'file_path',
        'image_path',
    ];
}
