<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLevelsRequest;
use App\Http\Resources\V1\LevelsCollection;
use App\Http\Resources\V1\LevelsResource;
use App\Models\Levels;
use Illuminate\Http\Request;

class LevelsController extends Controller
{
    public function index()
    {
        return new LevelsCollection(Levels::all());
    }

    public function show(Levels $level)
    {
        return new LevelsResource($level);
    }

    public function store(StoreLevelsRequest $request)
    {
        Levels::create($request->validated());
        return response()->json("Level Created");
    }

    public function update(StoreLevelsRequest $request, $id)
    {
        $level = Levels::findOrFail($id);
        $level->update($request->all());

        return $level;
    }

    public function destroy(Levels $level)
    {
        $level->delete();
        return response()->json("Level Deleted");
    }
}
