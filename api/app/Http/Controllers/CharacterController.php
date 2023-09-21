<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Character;

class CharacterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $characters = Character::all();

        return response()->json(["message" => 200,
            "characters" => $characters,
        ]);
    }

    public function store(Request $request)
    {
        $character = Character::create([
            'name' => $request->name,
            'status' => $request->status,
            'species' => $request->species,
            'image' => $request->image,
        ]);

        return response()->json(["message" => "Agregado exitosamente",
            "response" => $character,
        ]);
    }
}
