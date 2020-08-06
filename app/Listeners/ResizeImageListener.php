<?php

namespace App\Listeners;

use App\Events\NewPictureUploadEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ResizeImageListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewPictureUploadEvent  $event
     * @return void
     */
    public function handle(NewPictureUploadEvent $event)
    {
        \Intervention\Image\Facades\Image::make(public_path('storage/'.$event->user->picture))
            ->resize(250, 300, function($constraint) {
                $constraint->aspectRatio();
            })
            ->save();
    }
}
